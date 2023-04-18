<template>
  <FilesSettings @action="handleAction"></FilesSettings>
    <!-- draggable -->
  <n-tree
    ref="treeInstRef"
    class="no-select"
    :selected-keys="fileCheckedId"
    expand-on-click
    cascade
    :checkable="treeCascade"
    checkbox-placement="right"
    block-line
    :data="data"
    default-expand-all
    :cancelable="false"
    virtual-scroll
    style="height: 100%;"
    :node-props="nodeProps"
    :render-label="app.renderTree"
  />
  <n-dropdown
    trigger="manual"
    placement="bottom-start"
    :show="showDropdownRef"
    :options="optionsRef"
    :x="xRef"
    :y="yRef"
    @select="handleSelect"
    @clickoutside="handleClickoutside"
  />

  <n-modal
    v-model:show="showDelCategoryModel"
    transform-origin="center"
    preset="dialog"
    type="error"
    :title="nowChooseType == 'cate' ? t('fileSettingsDelCategory') : t('fileSettingsDelConversation')"
    :content="delContent"
    :positive-text="t('tempDelQaPositiveText')"
    :negative-text="t('tempDelQaNegativeText')"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  />
</template>

<script setup>
import { h, ref, onMounted } from "vue";
import FilesSettings from "./FilesSettings.vue";
import { app } from "../app/app.js";
import { useMessage } from "naive-ui";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const message = useMessage();

const nowChooseCateId = ref(0);
const nowChooseChatId = ref('');

const nowChooseCateName = ref('');
const nowChooseChatName = ref('');

const nowChooseType = ref('');

const treeCascade = ref(false);
const showDelCategoryModel = ref(false);
const submitCallback = async () => {
  if (nowChooseType.value == 'cate') {
    if (nowChooseCateId.value) {
      await app.deleteCategory(nowChooseCateId.value);
      loadChatListDataBySetting();
      resetData();
      nowChooseCateId.value = '';
      nowChooseType.value = '';
      message.success(t('deleted'));
    }
  } else if (nowChooseChatId.value) {
    await app.deleteChat(nowChooseChatId.value);
    loadChatListDataBySetting();
    resetData();
    nowChooseCateId.value = '';
    nowChooseType.value = '';
    message.success(t('deleted'));
  }
}
const resetData = () => {
  app.qaList.value = [];
  app.fileCheckedIds.value = [];
  app.breadcrumb.value = [];
  app.lastUpdateTime.value = 0;
}
const cancelCallback = () => {

}

const treeInstRef = ref();
const showDropdownRef = ref(false);
const optionsRef = ref([]);
const xRef = ref(0);
const yRef = ref(0);

const delContent = ref('');

const handleSelect = (e) => {
  showDropdownRef.value = false;
  if (e == 'rename') {
    if (nowChooseType.value == 'cate') {
      app.createCategoryId.value = nowChooseCateId.value;
      app.createCategoryName.value = nowChooseCateName.value;
      app.createCategoryType.value = 'update';
      app.createCategorySince.value = 'cate';
      app.showCreateCategory.value = true;

      nowChooseCateId.value = '';
      nowChooseCateName.value = '';
    } else if (nowChooseType.value == 'chat') {
      app.createCategoryId.value = nowChooseChatId.value;
      app.createCategoryName.value = nowChooseChatName.value;
      app.createCategoryType.value = 'update';
      app.createCategorySince.value = 'chat';
      app.showCreateCategory.value = true;

      nowChooseChatId.value = '';
      nowChooseChatName.value = '';
    }
  } else if (e == 'delete') {
    if (nowChooseType.value == 'cate') {
      delContent.value = t('filesDelCategoryEnsure');
      showDelCategoryModel.value = true;
    } else if (nowChooseType.value == 'chat') {
      delContent.value = t('filesDelConversationEnsure');
      showDelCategoryModel.value = true;
    }
  }
};
const handleClickoutside = (e) => {
  showDropdownRef.value = false;
};
const nodeProps = ({ option }) => {
  return {
    onClick(e) {
      let chatId = option.key;
      if (typeof chatId === "undefined") {
        e.preventDefault();
        return;
      }
      if (!option.isLeaf) {
        e.preventDefault();
        return;
      }

      if (app.fileCheckedIds.value.length > 0) {
        if (chatId != app.fileCheckedIds.value[0]) {
          app.fileCheckedIds.value = [];
        }
      }
      app.fileCheckedIds.value = [chatId];
      app.getChatDetail(chatId);
      e.preventDefault();
    },
    onContextmenu(e) {
      if (option.isLeaf) {
        nowChooseChatId.value = option.key;
        nowChooseChatName.value = option.label;
        nowChooseType.value = 'chat';
      } else {
        nowChooseCateId.value = option.key;
        nowChooseCateName.value = option.label;
        nowChooseType.value = 'cate';
      }

      optionsRef.value = [{
        "label": t('fileOptionRename'),
        "key": "rename",
      }, {
        'label': t('fileOptionDelete'),
        'key': 'delete',
      }];
      showDropdownRef.value = true;
      xRef.value = e.clientX;
      yRef.value = e.clientY;
      e.preventDefault();
    }
  };
}

const data = app.fileList;
const fileCheckedId = app.fileCheckedIds;

const handleAction = (action) => {
  if (action.key == 'refresh') {
    loadChatListData(action.val);
  } else if (action.key == 'select') {
    treeCascade.value = !treeCascade.value;
  }
}

const loadChatListData = async (sort) => {
  app.getChatList(sort);
}

const loadChatListDataBySetting = async () => {
  let sort = await app.getSetting('chat_sort');
  if (!sort.k) {
    loadChatListData('asc');
  } else {
    loadChatListData(sort.v);
  }
}

onMounted(async () => {
  // loadChatListData();
});

defineExpose({
  loadChatListDataHook: async () => {
    loadChatListDataBySetting();
  },
})
</script>