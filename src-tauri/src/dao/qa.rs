use rusqlite::{params, Connection, Result};

use crate::common::get_now_second;
use crate::model::qa::{QaModel, QaSearchModel};

pub fn create_qa_table(conn: &Connection) {
  conn.execute_batch("BEGIN;
CREATE TABLE IF NOT EXISTS qa(
  id INTEGER PRIMARY KEY,
  chat_id TEXT NOT NULL,
  typed INTEGER NOT NULL DEFAULT 0,
  html_origin TEXT NOT NULL,
  html_content TEXT NOT NULL,
  ctime INTEGER NOT NULL,
  mtime INTEGER NOT NULL
);
CREATE VIRTUAL TABLE IF NOT EXISTS qa_fts USING fts5(
  chat_id, typed, html_origin, html_content, ctime, mtime,
  content='qa',
  content_rowid='id', tokenize = 'simple'
);

CREATE TRIGGER IF NOT EXISTS qa_ai AFTER INSERT ON qa
    BEGIN
        INSERT INTO qa_fts (rowid, chat_id, typed, html_origin, html_content, ctime, mtime)
        VALUES (new.id, new.chat_id, new.typed, new.html_origin, new.html_content, new.ctime, new.mtime);
    END;

CREATE TRIGGER IF NOT EXISTS qa_ad AFTER DELETE ON qa
    BEGIN
        INSERT INTO qa_fts (qa_fts, rowid, chat_id, typed, html_origin, html_content, ctime, mtime)
        VALUES ('delete', old.id, old.chat_id, old.typed, old.html_origin, old.html_content, old.ctime, old.mtime);
    END;

CREATE TRIGGER IF NOT EXISTS qa_au AFTER UPDATE ON qa
    BEGIN
        INSERT INTO qa_fts (qa_fts, rowid, chat_id, typed, html_origin, html_content, ctime, mtime)
        VALUES ('delete', old.id, old.chat_id, old.typed, old.html_origin, old.html_content, old.ctime, old.mtime);
        INSERT INTO qa_fts (rowid, chat_id, typed, html_origin, html_content, ctime, mtime)
        VALUES (new.id, new.chat_id, new.typed, new.html_origin, new.html_content, new.ctime, new.mtime);
    END;
      COMMIT;"
  ).unwrap();
}

pub fn delete_qa_data_by_id(conn: &Connection, id: i32) {
  let delete_sql = "DELETE FROM qa WHERE id = ?";
  match conn.execute(delete_sql, params![id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn delete_qa_data(conn: &Connection, chat_id: &str) {
  let delete_sql = "DELETE FROM qa WHERE chat_id = ?";
  match conn.execute(delete_sql, params![chat_id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn insert_qa_data(conn: &Connection,
    chat_id: &str,
    typed: i32, 
    html_origin: &str,
    html_content: &str,
  ) {
  let insert_sql = "INSERT INTO qa(chat_id, typed, html_origin, html_content, ctime, mtime) VALUES(?, ?, ?, ?, ?, ?)";
  let mills = get_now_second();
  match conn.execute(insert_sql, params![chat_id, typed, html_origin, html_content, mills, mills]) {
    Ok(_) => {
      // println!("ok?? {:?}", k)
    },
    Err(e) => {
      // todo need add log...
      println!("e?? {:?}", e)
    },
  };
}

pub fn update_qs_html(conn: &Connection,
  id: i32,
  html_origin: &str,
  html_content: &str
) {
  let update_sql = "UPDATE qa SET html_origin = ?, html_content = ?, mtime = ? WHERE id = ?";
  let mills = get_now_second();
  match conn.execute(update_sql, params![html_origin, mills, id]) {
    Ok(_) => {},
    Err(_) => {
      // todo need add log...
    },
  };
}

pub fn update_qs_category(conn: &Connection,
  id: i32,
  category: i32
) {
  let update_sql = "UPDATE qa SET category = ?, mtime = ? WHERE id = ?";
  let mills = get_now_second();
  match conn.execute(update_sql, params![category, mills, id]) {
    Ok(_) => {},
    Err(_) => {
      // todo need add log...
    },
  };
}

pub fn get_qa_list_by_chat_id(conn: &Connection, chat_id: &str) -> Vec<QaModel> {
  let sql:&str = "select id, chat_id, typed, html_origin, html_content from qa where chat_id = ?";
  let mut stmt = conn.prepare(sql).unwrap();

  let iterator = stmt.query_map(params![chat_id], |row| {
    Ok(QaModel{
      id: row.get(0).unwrap(),
      chat_id: row.get(1).unwrap(),
      typed: row.get(2).unwrap(),
      html_origin: row.get(3).unwrap(),
      html_content: row.get(4).unwrap()
    })
  }).unwrap();

  let mut r = Vec::new();
  for p in iterator {
    match p {
      Err(_) => {}
      Ok(pr) => {
        r.push(pr);
      }
    }
  }
  return r;
}

pub fn match_qa(conn: &Connection, search: &str) -> Result<Vec<QaSearchModel>> {
  // let sql:&str = "select chat_id, typed, html_content, rowid from qa_fts where html_content match simple_query(?) order by mtime desc";
  let sql: &str = "select chat_id, simple_highlight_pos(qa_fts, 3) from qa_fts where html_content match simple_query(?) order by mtime desc";
  let mut stmt = conn.prepare(sql).unwrap();

  let iterator = stmt.query_map(params![search], |row| {
    Ok(QaSearchModel{
      chat_id: row.get(0).unwrap(),
      find_total: row.get(1).unwrap()
    })
  }).unwrap();

  let mut r = Vec::new();
  for p in iterator {
    match p {
      Err(_) => {}
      Ok(pr) => {
        r.push(pr);
      }
    }
  }
  Ok(r)
}