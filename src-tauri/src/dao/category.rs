use crate::model::category::CategoryItem;
use rusqlite::{params, Connection, Result};

pub fn create_category_table(conn: &Connection) {
  conn.execute_batch("BEGIN;
CREATE TABLE IF NOT EXISTS category(
    id INTEGER PRIMARY KEY autoincrement,
    name TEXT NOT NULL
);
    COMMIT;"
  ).unwrap();
  conn.execute_batch("BEGIN;
  INSERT INTO category (name) SELECT 'default' WHERE NOT EXISTS (SELECT 1 FROM category);
    COMMIT;"
  ).unwrap();
}

pub fn update_one_category(conn: &Connection, id: &str, name: &str) {
  let insert_sql = "UPDATE category set name = ? WHERE id = ?";
  match conn.execute(insert_sql, params![name, id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn delete_one_category(conn: &Connection, id: &str) {
  let insert_sql = "DELETE FROM category WHERE id = ?";
  match conn.execute(insert_sql, params![id]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn insert_one_category(conn: &Connection, name: &str) {
  let insert_sql = "INSERT INTO category(name) VALUES(?)";
  match conn.execute(insert_sql, params![name]) {
    Ok(_) => {},
    Err(_) => {
    },
  };
}

pub fn get_one_category_by_name(conn: &Connection, name: &str) -> CategoryItem {
  let sql:&str = "select id, name from category where name = ?";
  let mut stmt = conn.prepare(sql).unwrap();
  let category_iterator = stmt.query_map(params![name], |row| {
    Ok(CategoryItem{
      id: row.get(0).unwrap(),
      name: row.get(1).unwrap()
    })
  }).unwrap();

  // let mut r = Vec::new();
  for c in category_iterator {
    match c {
      Err(_) => {
        return CategoryItem { id: 0, name: String::new() };
      }
      Ok(cr) => {
        return cr;
      }
    }
  }
  return CategoryItem { id: 0, name: String::new() };
}

pub fn get_one_category(conn: &Connection, id: i32) -> CategoryItem {
  let sql:&str = "select id, name from category where id = ?";
  let mut stmt = conn.prepare(sql).unwrap();
  let category_iterator = stmt.query_map(params![id], |row| {
    Ok(CategoryItem{
      id: row.get(0).unwrap(),
      name: row.get(1).unwrap()
    })
  }).unwrap();

  // let mut r = Vec::new();
  for c in category_iterator {
    match c {
      Err(_) => {
        return CategoryItem { id: 0, name: String::new() };
      }
      Ok(cr) => {
        return cr;
      }
    }
  }
  return CategoryItem { id: 0, name: String::new() };
}

pub fn get_all_category(conn: &Connection, sort: &str) -> Result<Vec<CategoryItem>> {
  let s1 = String::from("select id, name from category order by id");
  let s2 = String::from(sort);
  let sql = format!("{} {}", s1, s2);
  let mut stmt = conn.prepare(sql.as_str()).unwrap();
  let category_iterator = stmt.query_map(params![], |row| {
    Ok(CategoryItem{
      id: row.get(0).unwrap(),
      name: row.get(1).unwrap()
    })
  }).unwrap();

  let mut r = Vec::new();
  for c in category_iterator {
    match c {
      Err(_) => {}
      Ok(cr) => {
        r.push(cr);
      }
    }
  }
  Ok(r)
}