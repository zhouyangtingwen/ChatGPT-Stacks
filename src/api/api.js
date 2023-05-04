import { invoke } from "@tauri-apps/api/tauri";

const api = {
    getChatList: (sortStr) => invoke('get_chat_list', {sort: sortStr}),
    getSetting: (k) => invoke('get_setting', {k: k}),
    setSetting: (k, v) => invoke('set_setting', {k: k, v: v}),
    createCategory: (name) => invoke('create_category', {name: name}),
    updateCategory: (id, name) => invoke('update_category', {id: id, name: name}),
    deleteCategory: (id) => invoke('delete_category', {id: id}),
    getCategoryList: () => invoke('get_category_list'),
    getChatDetail: (chatId) => invoke('get_chat_detail', {chatId: chatId}),
    createChatgptWindow: () => invoke('create_chatgpt_window'),
    searchChat: (search) => invoke('search_chat', {search: search}),
    updateChat: (chatId, name) => invoke('update_qa_chat', {chatId: chatId, name: name}),
    deleteChat: (chatId) => invoke('delete_qa_chat', {chatId: chatId}),
    deleteQa: (id) => invoke('delete_one_qa', {id: id}),
    updateChatCategory: (chatId, cate) => invoke('update_qa_category', {chatId: chatId, cate: cate}),
    saveHtml: (chatId, name, category, html) => invoke('save_html', {chatId: chatId, name: name, category: category, html: html, append: false}),
}

export {
    api
}