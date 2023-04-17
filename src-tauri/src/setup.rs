use tauri::{App, Manager};

use crate::{
    common::{
      init_resource_path, init_app_path, init_app_version, get_app_version_string
    }, 
    tray::set_version_in_tray, 
    dao::{base::get_db_conn, qa::create_qa_table, category::{create_category_table, get_all_category}, chat::create_chat_table, kv::create_kv_table}
};

fn public_init(app: &mut App) {
  let resource_path = tauri::api::path::resource_dir(app.package_info(), &app.env()).expect("init_resource_path_fail");
  let _resource_path = resource_path.clone();
  init_resource_path(resource_path);
  let config = app.config();
  init_app_path(&config);
  init_app_version(&config);

  let version = get_app_version_string();
  set_version_in_tray(app, version);

  let conn = get_db_conn();
  create_qa_table(&conn);
  create_category_table(&conn);
  create_chat_table(&conn);
  create_kv_table(&conn);
}

pub fn init(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
    public_init(app);

    // chat::create_chat(app);

    Ok(())
}