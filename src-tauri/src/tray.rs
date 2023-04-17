use tauri::{App, Manager, AppHandle, SystemTrayEvent, SystemTray, CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};

pub fn build_tray() -> SystemTray {
  let version = CustomMenuItem::new("version".to_string(), "版本");
  let hide = CustomMenuItem::new("hide".to_string(), "隐藏");
  let show = CustomMenuItem::new("show".to_string(), "显示");
  let quit = CustomMenuItem::new("quit".to_string(), "退出");
  let restart = CustomMenuItem::new("restart".to_string(), "重启");
  let tray_menu = SystemTrayMenu::new()
    .add_item(version)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(hide)
    .add_item(show)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit)
    .add_item(restart);

  return SystemTray::new().with_menu(tray_menu);
}

pub fn handler(app: &AppHandle, event: SystemTrayEvent) {
    match event {
      SystemTrayEvent::LeftClick {
        position: _,
        size: _,
        ..
      } => {
        // println!("system tray received a left click");
      }
      SystemTrayEvent::RightClick {
        position: _,
        size: _,
        ..
      } => {
        // println!("system tray received a right click");
      }
      SystemTrayEvent::DoubleClick {
        position: _,
        size: _,
        ..
      } => {
        // println!("system tray received a double click");
        let window = app.get_window("main").unwrap();
        window.show().unwrap();
        window.set_focus().unwrap();
      }
      SystemTrayEvent::MenuItemClick { id, .. } => {
        match id.as_str() {
          "version" => {
            // todo...
          }
          "restart" => {
            app.restart();
          }
          "quit" => {
            std::process::exit(0);
          }
          "hide" => {
            let window = app.get_window("main").unwrap();
            window.hide().unwrap();
          }
          "show" => {
            let window = app.get_window("main").unwrap();
            window.show().unwrap();
          }
          _ => {}
        }
      }
      _ => {}
    }
  }
  
  pub fn set_version_in_tray(app: &mut App, mut version: String) {
    if version.is_empty() {
      return
    }
    _ = app.tray_handle().get_item("version").set_title(version.as_str());
  }