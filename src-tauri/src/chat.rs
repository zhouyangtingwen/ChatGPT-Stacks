use tauri::{App, WindowBuilder, WindowUrl, Manager};

pub fn create_chat(app: tauri::AppHandle) {
//     let inner_script = r#"
//     window.addEventListener('DOMContentLoaded', function() {
//         console.log(123);
//     });
//   "#;

    if let Some(wc) = app.get_window("chat") {
        wc.show();
        return;
    }

    WindowBuilder::new(&app, "chat", WindowUrl::App("https://chat.openai.com".into()))
    .inner_size(1000.00, 700.00)
    .min_inner_size(800.00, 600.00)
    .resizable(true)
    .fullscreen(false)
    // .hidden_title(true)
    // .transparent(true)
    .title("chat.openai.com")

    // .initialization_script(inner_script)
    .initialization_script(include_str!("./js/core.js")) // core
    .initialization_script(include_str!("./js/ui.js")) // ui
    .user_agent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15")

    .build()
    .unwrap();
}