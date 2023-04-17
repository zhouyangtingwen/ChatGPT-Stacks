use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ChatModel {
    pub chat_id: String,
    pub name: String,
    pub category: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ChatMTimeModel {
    pub chat_id: String,
    pub name: String,
    pub category: i32,
    pub mtime: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ChatDetailModel {
    pub chat_id: String,
    pub name: String,
    pub category: i32,
    pub category_name: String,
    pub qa_list: Vec<QaModel>,
    pub mtime: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ChatTreeModel {
    pub key: String,
    pub label: String,

    // #[serde(skip_serializing_if = "Vec::is_empty")]
    pub children: Vec<ChatTreeModel>,

    #[serde(skip_serializing_if = "String::is_empty")]
    pub suffix: String,

    #[serde(rename(serialize = "isLeaf", deserialize = "isLeaf"))]
    pub is_leaf: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct QaModel {
    pub id: i32,
    pub chat_id: String,
    pub typed: i32,
    pub html_origin: String,
    pub html_content: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct QaSearchModel {
    pub chat_id: String,
    pub find_total: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HtmlList {
  pub list: Vec<HtmlItem>
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HtmlItem {
    pub typed: i32,
    // pub category: i32,
    pub html: String,
    pub content: String,
}