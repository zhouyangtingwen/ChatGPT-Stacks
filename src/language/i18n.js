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
      fileOptionRename: 'rename',
      fileOptionDelete: 'delete',

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
    }
  }
})

export default i18n