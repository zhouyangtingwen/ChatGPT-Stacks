use std::collections::HashMap;

use tauri::{api, Manager, AppHandle};

use crate::{
  dao::{
    qa::{insert_qa_data, get_qa_list_by_chat_id, match_qa, delete_qa_data, delete_qa_data_by_id}, 
    base::get_db_conn, 
    category::{get_all_category, get_one_category, get_one_category_by_name, insert_one_category, delete_one_category, update_one_category, create_category_table}, 
    chat::{insert_one_chat, update_one_chat, delete_one_chat, get_one_chat, get_one_chat_by_category}, kv::{get, upsert}
  }, 
  model::{
    qa::{HtmlList, ChatTreeModel, ChatDetailModel, ChatMTimeModel}, 
    category::CategoryItem, kv::KvKModel
  }
};

use crate::chat;

#[tauri::command]
pub fn open(app: AppHandle, url: &str) -> Result<String, String> {
  match api::shell::open(&app.shell_scope(), url, None) {
    Err(e) => {
      Err(e.to_string())
    },
    Ok(_) => {
      Ok(String::new())
    }
  }
}

#[tauri::command]
pub fn create_chatgpt_window(app: tauri::AppHandle) {
  chat::create_chat(app);
}

#[tauri::command]
pub fn get_setting(k: &str) -> Result<KvKModel, String> {
  let conn = get_db_conn();
  Ok(get(&conn, k))
}

#[tauri::command]
pub fn set_setting(k: &str, v: &str) -> Result<String, String> {
  let conn = get_db_conn();
  upsert(&conn, k, v);
  Ok(String::from("ok"))
}

#[tauri::command]
pub fn save_html(app: tauri::AppHandle, chat_id: &str, name: &str, category: &str, html: &str, append: bool) -> Result<String, String> {
  let conn = get_db_conn();
  // if !append {
    insert_one_chat(&conn, chat_id, name, category);
  // }
  match serde_json::from_str::<HtmlList>(html) {
    Err(e) => {
      // err handle..
      Err(e.to_string())
    },
    Ok(r) => {
      // if r.list.is_empty() {
      //   return Err(String::from("未保存过当前任何对话, 请先选择对话并保存"));
      // }
      for (_, v) in r.list.into_iter().enumerate() {
        insert_qa_data(
          &conn, 
          chat_id, 
          v.typed, 
          v.html.as_str(), 
          v.content.as_str()
        );
      }
      if let Some(wd) = app.get_window("main") {
        wd.emit("refresh_temp", chat_id);
      }
      Ok(String::from("ok"))
    }
  }
}

#[tauri::command]
pub fn get_chat(chat_id: &str) -> Result<ChatMTimeModel, String> {
  let conn = get_db_conn();
  let r = get_one_chat(&conn, chat_id);
  Ok(r)
}

#[tauri::command]
pub fn get_chat_detail(chat_id: &str) -> Result<ChatDetailModel, String> {
  let conn = get_db_conn();
  let one_chat = get_one_chat(&conn, chat_id);
  let one_category = get_one_category(&conn, one_chat.category);
  let res = ChatDetailModel { 
    chat_id: chat_id.to_string(), 
    name: one_chat.name, 
    category: one_chat.category, 
    category_name: one_category.name, 
    qa_list: get_qa_list_by_chat_id(&conn, chat_id),
    mtime: one_chat.mtime,
  };
  Ok(res)
}

#[tauri::command]
pub fn search_chat(search: &str) -> Result<Vec<ChatTreeModel>, String> {
  let conn = get_db_conn();
  let mut res_list: Vec<ChatTreeModel> = Vec::new();
  match match_qa(&conn, search) {
    Err(_) => {
      return Err("no res".to_owned());
    },
    Ok(res) => {
      let mut map = HashMap::new();
      for (idx, y) in res.into_iter().enumerate() {
        for (_, _) in y.find_total.split(';').into_iter().enumerate() {
          let count = map.entry(y.chat_id.clone()).or_insert(0);
          *count += 1;
        }
      }

      let mut cate_chat_map = HashMap::new();
      for (chat_id, count) in map {
        let chat = get_one_chat(&conn, chat_id.as_str());

        let category_item = get_one_category(&conn, chat.category);
        let default_tree = ChatTreeModel{
          key: category_item.id.to_string(),
          label: category_item.name,
          children: Vec::new(),
          suffix: String::from(""),
          is_leaf: false,
        };
        let children = cate_chat_map.entry(chat.category).or_insert(default_tree);

        let mut find_str = String::from(count.to_string().as_str());
        // find_str.push_str("查找到 <span style='color: #CC0700'>");
        // find_str.push_str();
        // find_str.push_str("</span> 个结果");
        let tree_item = ChatTreeModel {
          key: chat.chat_id,
          label: chat.name,
          children: Vec::new(),
          suffix: find_str,
          is_leaf: true,
        };
        children.children.push(tree_item);
      }

      for (cate_id, cate_tree) in cate_chat_map {
        res_list.push(cate_tree);
      }

      return Ok(res_list);
    }
  }
}

#[tauri::command]
pub fn get_chat_list(sort: &str) -> Result<Vec<ChatTreeModel>, String> {
  let conn = get_db_conn();
  let mut res_list: Vec<ChatTreeModel> = Vec::new();
  match get_all_category(&conn, sort) {
    Err(e) => {
      Err(e.to_string())
    },
    Ok(all_category) => {
      all_category.into_iter().for_each(|x| {
        let mut chat_model = ChatTreeModel{
          key: x.id.to_string(),
          label: x.name,
          children: Vec::new(),
          suffix: String::new(),
          is_leaf: false,
        };
        for (idx, y) in get_one_chat_by_category(&conn, x.id).into_iter().enumerate() {
          // let mut id = idx.to_string();
          // id.push_str("_");
          // id.push_str(y.chat_id.as_str());
          chat_model.children.push(ChatTreeModel { 
            key:  y.chat_id, 
            label: y.name, 
            children: Vec::new(),
            suffix: String::new(),
            is_leaf: true,
          });
        }
        res_list.push(chat_model);
      });
      Ok(res_list)
    },
  }
}

#[tauri::command]
pub fn get_category_list() -> Result<Vec<CategoryItem>, String> {
  let conn = get_db_conn();
  match get_all_category(&conn, "asc") {
    Ok(r) => {
      Ok(r)
    }
    Err(e) => {
      Err(e.to_string())
    }
  }
}

#[tauri::command]
pub fn create_category(name: &str) -> Result<String, String> {
  let conn = get_db_conn();

  let res = get_one_category_by_name(&conn, name);
  if res.id != 0 {
    return Err(String::from("已有同名的分类啦, 换一个名称吧"));
  } else {
    insert_one_category(&conn, name);
    return Ok(String::from("ok"));
  }
}

#[tauri::command]
pub fn update_category(id: &str, name: &str) -> Result<String, String> {
  let conn = get_db_conn();
  update_one_category(&conn, id, name);
  Ok(String::new())
}

#[tauri::command]
pub fn delete_category(mut id: i32) -> Result<String, String> {
  let conn = get_db_conn();
  delete_one_category(&conn, id.to_string().as_str());

  for (idx, item) in get_one_chat_by_category(&conn, id).into_iter().enumerate() {
    delete_one_chat(&conn, item.chat_id.as_str());
    delete_qa_data(&conn, item.chat_id.as_str());
  }

  match get_all_category(&conn, "asc") {
    Err(_) => {

    },
    Ok(all_cate) => {
      if all_cate.is_empty() {
        create_category_table(&conn);
      }
    }
  }

  Ok(String::new())
}

#[tauri::command]
pub fn update_qa_category(chat_id: &str, cate: &str) -> Result<String, String> {
  let conn = get_db_conn();

  let chat = get_one_chat(&conn, chat_id);
  if chat.name.is_empty() {
    Err(String::from("something error"))
  } else {
    insert_one_chat(&conn, chat_id, chat.name.as_str(), cate);
    Ok(String::from("ok"))
  }
}

#[tauri::command]
pub fn create_qa_chat(chat_id: &str, name: &str, cate: &str) {
  let conn = get_db_conn();
  insert_one_chat(&conn, chat_id, name, cate);
}

#[tauri::command]
pub fn update_qa_chat(chat_id: &str, name: &str) {
  let conn = get_db_conn();
  update_one_chat(&conn, chat_id, name);
}

#[tauri::command]
pub fn delete_qa_chat(chat_id: &str) {
  let conn = get_db_conn();
  delete_one_chat(&conn, chat_id);
  delete_qa_data(&conn, chat_id);
}

#[tauri::command]
pub fn delete_one_qa(id: i32) {
  let conn = get_db_conn();
  delete_qa_data_by_id(&conn, id);
}