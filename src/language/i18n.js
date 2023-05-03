import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true,
  messages: {
    en: {
      hello: 'hello!',
      openChatgpt: 'Open ChatGPT',
      create: 'Create ',
      update: 'Update ',
      category: 'Category',
      conversation: 'conversation',
      submit: 'submit',
      successfully: 'successfully',
      deleted: 'deleted',
      search: 'Search',

      searchRes: 'There are %s results in %s files.',

      fileSettingsCreateCategory: 'Create a new category',
      fileSettingsCreateCategoryTitle: 'Create a new category',
      fileSettingsCreateCategoryPlaceholder1: 'Enter the name of the conversation you want to create',
      fileSettingsCreateCategoryPlaceholder2: 'Enter the name of the conversation you want to update',
      fileSettingsCreateCategoryPlaceholder3: 'Enter the name of the category you want to create',
      fileSettingsCreateCategoryPlaceholder4: 'Enter the name of the category you want to update',

      fileSettingsDelCategory: 'Delete category',
      fileSettingsDelConversation: 'Delete conversation',
      fileOptionRename: 'Rename',
      fileOptionMove: 'Move To...',
      fileOptionDelete: 'Delete',

      filesDelCategoryEnsure: 'Confirm deletion of category? (All conversations under this category will also be deleted)',
      filesDelConversationEnsure: 'Confirm deletion of conversation?',

      fileSettingsSort: 'Sort',
      fileSettingsRefresh: 'Refresh',
      fileSettingsSearch: 'Search',
      tempDelQa: 'Are you sure you want to delete this conversation?',
      tempDelQaTitle: 'Delete conversation',
      tempDelQaPositiveText: 'yes',
      tempDelQaNegativeText: 'no',
      tempDelSuccess: 'Conversation deleted successfully',
      tempConversationUpdateTime: 'Conversation update time',
      copySuccess: 'Copy succeeded',
      copyFailed: 'Nothing to copy',

      tempDefault1: '<p>What is ChatGPT-Stacks?</p>',
      tempDefault2: '<p>ChatGPT-Stacks is a desktop application built using Tauri, Vue3, and SQLite3 technologies. The application allows you to save and organize all of your ChatGPT conversations directly to your local SQLite3 database with ease.</p><p>Please see <a href="https://github.com/zhouyangtingwen/ChatGPT-Stacks" style="color: #63e2b7" target="_blank">Github</a> for more details</p>',
      tempDefault3: '<p>How to use?</p>',
      tempDefault4: '<ol><li>Click "Open ChatGPT"<img src="/9451681752337_.pic.jpg"></li><li>Log in to your account<img src="/9461681752384_.pic.jpg"></li><li>Create or select a conversation<img src="/9561681753461_.pic.jpg"></li><li>Click "Select" and choose the conversation(s) you want to save<img src="/9471681752538_.pic.jpg"><img src="/9481681752569_.pic.jpg"><img src="/9491681752595_.pic.jpg"></li><li>Or you can click "select" again for select all conversations <img src="/9571681753887_.pic.jpg"></li><li>Click "Add" and confirm the information<img src="/9501681752615_.pic.jpg"><img src="/9581681754136_.pic.jpg"></li><li>Click "Submit"<img src="/9511681752630_.pic.jpg"><img src="/9521681752727_.pic.jpg"></li><li>View your saved conversation(s)<img src="/9531681752833_.pic.jpg"><img src="/9551681752959_.pic.jpg"></ol>',
    },
    zh: {
      hello: '你好！',
      openChatgpt: '打开 ChatGPT',
      create: '创建',
      update: '更新',
      category: '分类',
      conversation: '对话',
      submit: '提交',
      successfully: '成功',
      deleted: '已删除',
      search: '搜索',

      searchRes: '<span style="color: #19c37d">%s</span> 个文件中有 <span style="color: #19c37d">%s</span> 个结果',

      fileSettingsCreateCategory: '新建分类',
      fileSettingsCreateCategoryTitle: '新建分类',
      fileSettingsCreateCategoryPlaceholder1: '输入你想创建的对话名称',
      fileSettingsCreateCategoryPlaceholder2: '输入你想更新的对话名称',
      fileSettingsCreateCategoryPlaceholder3: '输入你想创建的分类名称',
      fileSettingsCreateCategoryPlaceholder4: '输入你想更新的分类名称',

      fileSettingsDelCategory: '删除分类',
      fileSettingsDelConversation: '删除对话',
      fileOptionRename: '重命名',
      fileOptionMove: '移动到...',
      fileOptionDelete: '删除',

      filesDelCategoryEnsure: '确认删除分类?(该分类下所有对话也会删除)',
      filesDelConversationEnsure: '确认删除对话?',

      fileSettingsSort: '排序',
      fileSettingsRefresh: '刷新',
      fileSettingsSearch: '搜索',
      tempDelQa: '确定删除这条对话吗?',
      tempDelQaTitle: '删除对话',
      tempDelQaPositiveText: '确定',
      tempDelQaNegativeText: '算了',
      tempDelSuccess: '对话删除成功',
      tempConversationUpdateTime: '对话更新时间',
      copySuccess: '复制成功',
      copyFailed: '未找到可复制文字',

      tempDefault1: 'ChatGPT-Stacks 是什么?',
      tempDefault2: '<p>ChatGPT-Stacks 是一个使用Tauri、Vue3和SQLite3技术构建的桌面应用程序。该应用程序允许您轻松地将所有ChatGPT对话直接保存和组织到本地SQLite3数据库中。</p><p>更多介绍请查看 <a href="https://github.com/zhouyangtingwen/ChatGPT-Stacks" style="color: #63e2b7" target="_blank">Github</a> 地址</p>',
      tempDefault3: '<p>如何使用?</p>',
      tempDefault4: '<ol><li>点击 "打开 ChatGPT"<img src="/9451681752337_.pic.jpg"></li><li>登录你的账号<img src="/9461681752384_.pic.jpg"></li><li>创建或选择对话<img src="/9561681753461_.pic.jpg"></li><li>点击"选择"并选中你需要保存的对话<img src="/9471681752538_.pic.jpg"><img src="/9481681752569_.pic.jpg"><img src="/9491681752595_.pic.jpg"></li><li>或者，你也可以再次点击“选择”，选择所有对话 <img src="/9571681753887_.pic.jpg"></li><li>点击"添加"并确认信息<img src="/9501681752615_.pic.jpg"><img src="/9581681754136_.pic.jpg"></li><li>点击 "确定"<img src="/9511681752630_.pic.jpg"><img src="/9521681752727_.pic.jpg"></li><li>查看保存的对话<img src="/9531681752833_.pic.jpg"><img src="/9551681752959_.pic.jpg"></ol>',
    }
  }
})

export default i18n
