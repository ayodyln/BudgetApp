use std::fs::File;
use std::io::prelude::*;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![show_main_window, get_data])
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn show_main_window(window: tauri::Window) {
    // Mounts the window and avoids dark mode flash
    window.show().unwrap()
}

#[tauri::command]
async fn get_data() -> Result<String, String> {
    let mut file = File::open("/Users/dylansmith/documents/github/projects/temp_dev_data/fba.json").map_err(|e| e.to_string())?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)
        .map_err(|e| e.to_string())?;
    Ok(contents)
}   
