use std::{
    fs,
    path::PathBuf,
    sync::RwLock
};

use chrono::{DateTime, Local};
use lazy_static::lazy_static;
lazy_static! {
  static ref APP_PATHBUF: RwLock<PathBuf> = RwLock::new(PathBuf::new());
  static ref RESOURCE_PATHBUF: RwLock<PathBuf> = RwLock::new(PathBuf::new());

  static ref APP_VERSION: RwLock<String> = RwLock::new(String::new());
}

pub fn get_app_version_string() -> String {
  match APP_VERSION.read() {
    Err(_) => {
      return String::new();
    },
    Ok(v) => {
      return v.to_string();
    }
  }
}

pub fn init_resource_path(p: PathBuf) {
  let mut n = RESOURCE_PATHBUF.write().unwrap();
  *n = p;
}

pub fn init_app_path(config: &tauri::Config) {
  let mut n = APP_PATHBUF.write().unwrap();
  *n = tauri::api::path::app_data_dir(&config).expect("the_app_path_init_failed");
}

pub fn init_app_version(config: &tauri::Config) {
  let version = &config.package.version;
  match version {
    Some(v) => {
      let mut n = APP_VERSION.write().unwrap();
      *n = String::from(v);
    },
    None => {}
  }
}

pub fn get_chatgptstacks_data_self_dir() -> PathBuf {
  return RESOURCE_PATHBUF.read().expect("get_chatgptstacks_data_self_dir_fail").to_path_buf();
}

pub fn copy_file_2_data(origin_path: PathBuf, base_path: Vec<&str>, icon_name: &str) -> Result<bool, String> {
  if !origin_path.exists() {
    return Err(String::from("origin_file_not_found"));
  }
  let to_copy = get_chatgptstacks_app_custom_dir_deep(base_path).join(icon_name);
  return copy_file(
    origin_path.to_str().expect("can not find origin icon"),
    to_copy.to_str().expect("can not find file icon")
  );
}

pub fn copy_file(from: &str, to: &str) -> Result<bool, String> {
  match fs::copy(from, to) {
    Err(e) => {
      Err(e.to_string())
    }
    Ok(_) => {
      Ok(true)
    }
  }
}

pub fn get_chatgptstacks_app_custom_dir_deep(custom_dirs: Vec<&str>) -> PathBuf {
  let mut path = get_chatgptstacks_data_dir();
  for custom_dir in custom_dirs.into_iter() {
    path = path.join(custom_dir);
    if !path.exists() {
      create_chatgptstacks_lower_dir(&path);
    }
  }
  return path;
}

pub fn create_chatgptstacks_lower_dir(dir: &PathBuf) {
  fs::create_dir_all(dir.as_path()).ok().expect("create logic dir failed");
}

pub fn get_chatgptstacks_data_dir() -> PathBuf {
  return APP_PATHBUF.read().expect("get_chatgptstacks_data_self_dir_fail").to_path_buf();
}

pub fn get_now_second() -> i32 {
  let now: DateTime<Local> = Local::now();
  let mills: i32 = (now.timestamp_millis() / 1000) as i32; // 1609761696945
  return mills;
}