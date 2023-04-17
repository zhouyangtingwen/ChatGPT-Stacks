use rusqlite::{params, Connection};

use crate::model::kv::KvKModel;

pub fn create_kv_table(conn: &Connection) {
    conn.execute_batch("BEGIN;
  CREATE TABLE IF NOT EXISTS kv(
    k TEXT NOT NULL,
    v TEXT NOT NULL,
    UNIQUE (k)
  );
    COMMIT;"
    ).unwrap();
}

pub fn upsert(conn: &Connection, k: &str, v: &str) {
  let upsert_sql = "INSERT INTO kv(k, v) VALUES(?, ?) ON CONFLICT(k) DO UPDATE SET v=?";
  match conn.execute(upsert_sql, params![k, v, v]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn get(conn: &Connection, k: &str) -> KvKModel {
  let sql:&str = "select k, v from kv where k = ? limit 1";
  let mut stmt = conn.prepare(sql).unwrap();

  let person_iterator = stmt.query_map(params![k], |row| {
    Ok(KvKModel{
      k: row.get(0).unwrap(),
      v: row.get(1).unwrap(),
    })
  }).unwrap();

  for p in person_iterator {
    match p {
      Err(_) => {
        return KvKModel{
          k: String::from(""),
          v: String::from(""),
        };
      }
      Ok(pr) => {
        return KvKModel{
          k: pr.k,
          v: pr.v,
        };
      }
    }
  }
  return KvKModel{
    k: String::from(""),
    v: String::from(""),
  };
}