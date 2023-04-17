#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

extern crate lazy_static;

mod api;
mod chat;
mod common;
mod dao;
mod model;
mod setup;
mod tray;

fn main() {
    tauri::Builder::default()
        .setup(setup::init)
        .invoke_handler(tauri::generate_handler![
            api::open,
            api::create_chatgpt_window,
            api::get_setting,
            api::set_setting,
            api::save_html,
            api::update_category,
            api::delete_category,
            api::create_category,
            api::get_category_list,
            api::search_chat,
            api::get_chat,
            api::get_chat_detail,
            api::get_chat_list,
            api::update_qa_chat,
            api::delete_qa_chat,
            api::delete_one_qa
        ])
        .system_tray(tray::build_tray())
        .on_system_tray_event(tray::handler)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
