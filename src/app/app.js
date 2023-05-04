import { ref, h } from "vue";
import { darkTheme, NText } from "naive-ui";

import { listen } from '@tauri-apps/api/event';
import { writeText } from '@tauri-apps/api/clipboard';

import { api } from "../api/api.js";

import i18n from "../language/i18n";

class App {
    constructor() {
        this.theme = ref(undefined);
        this.themeSwitch = ref(false);
        this.getSetting('chat_theme').then(res => {
          if (res.k) {
            let isDark = res.v == "dark";
            this.onDarkModeChange(isDark, false);
          }
        });
   
        this.showSearch = ref(false);
        this.showCreateCategory = ref(false);
        this.showImportChat = ref(false);
        this.showImportChatFileDrop = ref([]);

        this.createCategoryType = ref('create');
        this.createCategorySince = ref('chat');
        this.createCategoryId = ref('');
        this.createCategoryName = ref('');

        this.breadcrumb = ref([]);
        this.qaList = ref([]);
        this.fileList = ref([]);
        this.lastUpdateTime = ref(0);
        this.fileCheckedIds = ref([]);

        listen('tauri://file-drop', async (event) => {
          if (this.showImportChat.value) {
            this.showImportChatFileDrop.value = event;
          }
          // console.log(event);
        });

        listen('refresh_temp', (e) => {
          if (this.fileCheckedIds.value.length > 0) {
            if (this.fileCheckedIds.value[0] == e.payload) {
              this.getChatDetail(e.payload);
            }
          }
          this.getSetting('chat_sort').then(sort => {
            if (!sort.k) {
              this.getChatList('asc');
            } else {
              this.getChatList(sort.v);
            }
          });
        });
    }

    async createChatgptWindow() {
      api.createChatgptWindow();
    }

    async getChatList(sort) {
      let list = await api.getChatList(sort);
      this.fileList.value = list;
    }

    async getSetting(k) {
      return api.getSetting(k);
    }

    async setSetting(k, v) {
      return api.setSetting(k, v);
    }

    async createCategory(name) {
      return api.createCategory(name);
    }

    async updateCategory(id, name) {
      return api.updateCategory(id, name);
    }

    async deleteCategory(id) {
      return api.deleteCategory(Number(id));
    }

    async updateChat(chatId, name) {
      return api.updateChat(chatId, name);
    }

    async deleteChat(chatId) {
      return api.deleteChat(chatId);
    }

    async searchChat(search) {
      return api.searchChat(search);
    }

    async deleteQa(chatId, qaId) {
      await api.deleteQa(qaId);
      if (this.fileCheckedIds.value.length > 0) {
        if (this.fileCheckedIds.value[0] == chatId) {
          this.getChatDetail(chatId);
        }
      }
    }

    saveHtml(chatId, name, category, html) {
      return api.saveHtml(chatId, name, category, html)
    }

    getCategoryList() {
      return api.getCategoryList();
    }

    async getChatDetail(chatId) {
      try {
        let res = await api.getChatDetail(chatId);
        // console.log('res!', res);

        this.breadcrumb.value = [];
        this.breadcrumb.value.push(res.category_name);
        this.breadcrumb.value.push(res.name);
        this.lastUpdateTime.value = res.mtime;
        this.qaList.value = res.qa_list;
      } catch (e) {
        // console.log('err!', e);
      }
    }

    async getI18n() {
      let i18nConfig = await this.getSetting('chat_i18n');
      if (i18nConfig.k) {
        i18n.global.locale = i18nConfig.v;
      } else {
        i18n.global.locale = 'en';
      }
      return i18n.global.locale;
    }

    async copy(text) {
      return writeText(text);
    }

    onDarkModeChange = (open, set = true) => {
        if (open) {
            this.theme.value = darkTheme;
            this.themeSwitch.value = true;
            document.documentElement.setAttribute('data-theme', 'dark');
            if (set) {
              this.setSetting('chat_theme', 'dark')
            }
        } else {
            this.theme.value = undefined;
            this.themeSwitch.value = false;
            document.documentElement.setAttribute('data-theme', 'light');
            if (set) {
              this.setSetting('chat_theme', 'light')
            }
        }
    }

    renderTree = (info) => {
        if (typeof info.option.children === "undefined") {
          return h(NText, {
            tag: 'div',
            style: {
              padding: '6px 0 6px 0',
            }
          }, () => info.option.label);
        }
        return h(NText, { tag: 'div' }, () => info.option.label);
    };

    renderTreeIcon = ({ expanded }) => {
      let style = {
        marginTop: '10px',
      };
      if (expanded) {
        style.marginTop = '0';
      }
      return h('div', null, () => [
        h('div', null, () => 1),
        // h(expanded ? ChevronForward : SunnySharp),
      ]);
    }

    sprintf = (format, ...args) => {
      // var args = Array.prototype.slice.call(arguments, 1);
      
      return format.replace(/%[sd]/g, function(match) {
        if (match === '%s') {
          return String(args.shift());
        }
        else if (match === '%d') {
          return Number(args.shift());
        }
        else {
          return match;
        }
      });
    }
}

const app = new App();

export {
    app
}