use std::{sync::RwLock, fs, path::PathBuf};
// use std::{fs};

use rusqlite::{Connection};

use crate::common::{get_chatgptstacks_app_custom_dir_deep, get_chatgptstacks_data_self_dir};

use lazy_static::lazy_static;
lazy_static! {
  static ref DB_PATHBUF: RwLock<PathBuf> = RwLock::new(init_db_path());
  static ref EXTENSION_PATHBUF: RwLock<PathBuf> = RwLock::new(init_extension_path());
}

const DB_NAME: &str = "chatgptstacks.db";

pub fn init_db_path() -> PathBuf {
  let db_path = get_chatgptstacks_app_custom_dir_deep(vec!["DB"]);
  if !db_path.exists() {
    fs::create_dir_all(db_path.as_path()).ok().expect("create db dir failed")
  }
  return db_path.join(DB_NAME);
}

fn get_db_path() -> PathBuf {
  let dir = DB_PATHBUF.read().expect("db cache dir read error");
  return dir.to_path_buf();
}

fn init_extension_path() -> PathBuf {
  let extension_dir = get_chatgptstacks_data_self_dir();
  return extension_dir.join("libsimple");
}

/*
fn get_extension_path() -> PathBuf {
  let dir = EXTENSION_PATHBUF.read().expect("db cache dir read error");
  return dir.to_path_buf();
}
*/

pub fn get_db_conn() -> Connection {
  return init_db_conn();
}

fn init_db_conn() -> Connection {
  // let db_path = get_chatgptstacks_data_dir();
  let conn = Connection::open(get_db_path()).unwrap();

  let mut extension_dir = get_chatgptstacks_data_self_dir();
  extension_dir = extension_dir.join("data");

  #[cfg(target_os = "windows")]
  {
    extension_dir = extension_dir.join("libsimple.dll");
    // println!("extension_dir {:?}", extension_dir.to_str());
  }
  #[cfg(target_os = "macos")]
  {
    extension_dir = extension_dir.join("libsimple.dylib");
  }


  unsafe {
    conn.load_extension(
      extension_dir,
      None).expect("load db extension failed");
  }
  return conn;
}