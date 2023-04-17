use rusqlite::{params, Connection, Result};

use crate::{model::qa::{ChatModel, ChatMTimeModel}, common};

pub fn create_chat_table(conn: &Connection) {
  conn.execute_batch("BEGIN;
CREATE TABLE IF NOT EXISTS chat(
    chat_id TEXT NOT NULL,
    name TEXT NOT NULL,
    category INTEGER NOT NULL DEFAULT 0,
    ctime INTEGER NOT NULL DEFAULT 0,
    mtime INTEGER NOT NULL DEFAULT 0,
    UNIQUE (chat_id)
);
    COMMIT;"
  ).unwrap();
}

pub fn update_one_chat(conn: &Connection, chat_id: &str, name: &str) {
  let insert_sql = "UPDATE chat set name = ? WHERE chat_id = ?";
  match conn.execute(insert_sql, params![name, chat_id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn delete_one_chat(conn: &Connection, chat_id: &str) {
  let insert_sql = "DELETE FROM chat WHERE chat_id = ?";
  match conn.execute(insert_sql, params![chat_id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn insert_one_chat(conn: &Connection, chat_id: &str, name: &str, cate: &str) {
  let insert_sql = "INSERT INTO chat(chat_id, name, category, ctime, mtime) VALUES(?, ?, ?, ?, ?) ON CONFLICT(chat_id) DO UPDATE SET name=?, category=?, mtime=?";
  let now = common::get_now_second();
  match conn.execute(insert_sql, params![chat_id, name, cate, now, now, name, cate, now]) {
    Ok(_) => {
      // println!("ok?? {:?}", k)
    },
    Err(e) => {
      println!("e?? {:?}", e)
    },
  };
}

pub fn get_one_chat_by_category(conn: &Connection, cate: i32) -> Vec<ChatModel> {
  let sql: &str = "select chat_id, name, category from chat where category = ?";
  let mut stmt = conn.prepare(sql).unwrap();

  let iterator = stmt.query_map(params![cate], |row| {
    Ok(ChatModel{
      chat_id: row.get(0).unwrap(),
      name: row.get(1).unwrap(),
      category: row.get(2).unwrap()
    })
  }).unwrap();

  let mut res_list: Vec<ChatModel> =  Vec::new();
  for p in iterator {
    match p {
      Err(e) => {
        continue
      }
      Ok(pr) => {
        res_list.push(pr);
      }
    }
  }
  return res_list;
}

pub fn get_one_chat(conn: &Connection, chat_id: &str) -> ChatMTimeModel {
  let sql: &str = "select chat_id, name, category, mtime from chat where chat_id = ? limit 1";
  let mut stmt = conn.prepare(sql).unwrap();

  let iterator = stmt.query_map(params![chat_id], |row| {
    Ok(ChatMTimeModel{
      chat_id: row.get(0).unwrap(),
      name: row.get(1).unwrap(),
      category: row.get(2).unwrap(),
      mtime: row.get(3).unwrap()
    })
  }).unwrap();

  for p in iterator {
    match p {
      Err(_) => {
        return ChatMTimeModel{
          chat_id: String::from(""),
          name: String::from(""),
          category: 0,
          mtime: 0,
        };
      }
      Ok(pr) => {
        return ChatMTimeModel{
          chat_id: pr.chat_id,
          name: pr.name,
          category: pr.category,
          mtime: pr.mtime,
        };
      }
    }
  }
  return ChatMTimeModel{
    chat_id: String::from(""),
    name: String::from(""),
    category: 0,
    mtime: 0,
  };
}

pub fn get_all_chat(conn: &Connection) -> Result<Vec<ChatModel>> {
  let sql: &str = "select chat_id, name from chat";
  let mut stmt = conn.prepare(sql).unwrap();

  let iterator = stmt.query_map(params![], |row| {
    Ok(ChatModel{
      chat_id: row.get(0).unwrap(),
      name: row.get(1).unwrap(),
      category: row.get(2).unwrap()
    })
  }).unwrap();

  let mut r = Vec::new();
  for c in iterator {
    match c {
      Err(_) => {}
      Ok(cr) => {
        r.push(cr);
      }
    }
  }
  Ok(r)
}