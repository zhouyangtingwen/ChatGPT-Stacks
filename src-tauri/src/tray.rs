use tauri::{App, Manager, AppHandle, SystemTrayEvent, SystemTray, CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};

use tauri::api::shell::open;

pub fn build_tray() -> SystemTray {
  let chatgpt_stacks = CustomMenuItem::new("chatgptstacks".to_string(), "ChatGPT-Stacks");
  let version = CustomMenuItem::new("version".to_string(), "Version");
  let upgrade = CustomMenuItem::new("upgrade".to_string(), "Upgrade");
  let hide = CustomMenuItem::new("hide".to_string(), "Hide");
  let show = CustomMenuItem::new("show".to_string(), "Show");
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let restart = CustomMenuItem::new("restart".to_string(), "Restart");
  let tray_menu = SystemTrayMenu::new()
    .add_item(chatgpt_stacks)
    .add_item(version)
    .add_item(upgrade)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(hide)
    .add_item(show)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(restart)
    .add_item(quit);

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
          "chatgptstacks" => {
            match open(&app.shell_scope(), "https://github.com/zhouyangtingwen/ChatGPT-Stacks", None) {
              Err(_) => { }
              Ok(_) => { }
            }
          }
          "version" => {
            match open(&app.shell_scope(), "https://github.com/zhouyangtingwen/ChatGPT-Stacks", None) {
              Err(_) => { }
              Ok(_) => { }
            }
          }
          "upgrade" => {
            match open(&app.shell_scope(), "https://github.com/zhouyangtingwen/ChatGPT-Stacks", None) {
              Err(_) => { }
              Ok(_) => { }
            }
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