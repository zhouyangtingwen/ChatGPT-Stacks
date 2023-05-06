<template>
  <n-config-provider :theme="appTheme">
    <n-message-provider>
      <n-layout style="height: 100vh">
        <n-layout-header class="normal-flex padding-flex no-select" style="height: 60px;justify-content: space-between;" bordered>
          <div>
            <Logo></Logo>
          </div>
          <div class="normal-flex">
            <I18n></I18n>
            <n-divider vertical />
            <Theme @darkModeListen="app.onDarkModeChange"></Theme>
            <n-divider vertical />
            <Action></Action>
          </div>
        </n-layout-header>
        <n-layout position="absolute" style="top: 60px; bottom: 40px" has-sider>
          <n-layout-sider
            class="no-select"
            content-style="padding: 10px 15px 15px 15px;"
            :native-scrollbar="false"
            bordered
          >
            <Files ref="FilesRef"></Files>
          </n-layout-sider>
          <n-layout content-style="" :native-scrollbar="false">
            <Temp ref="TempRef"></Temp>
          </n-layout>
        </n-layout>
        <n-layout-footer
          position="absolute"
          class="normal-flex padding-flex no-select"
          style="height: 40px;justify-content: space-between;"
          bordered
        >
          <div>
            <Breadcrumb></Breadcrumb>
          </div>
          <div>
            <Info @gen="gen"></Info>
          </div>
        </n-layout-footer>
      </n-layout>

      <n-modal v-model:show="showSearch" transform-origin="center">
        <Search></Search>
      </n-modal>

      <n-modal v-model:show="showCreateCategory" transform-origin="center">
        <CategoryCreate @createResListen="handleCreateRes"></CategoryCreate>
      </n-modal>

      <n-modal v-model:show="showMoveTo" transform-origin="center">
        <CategoryUpdate @createResListen="handleCreateRes"></CategoryUpdate>
      </n-modal>

      <n-modal v-model:show="showImportChat" transform-origin="center">
        <ImportConversations></ImportConversations>
      </n-modal>

    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

import Logo from "./Logo.vue";
import Theme from "./Theme.vue";
import Action from "./Action.vue";
import Files from "./Files.vue";
import Temp from "./Temp.vue";
import Search from "./Search.vue";
import Breadcrumb from "./Breadcrumb.vue";
import Info from "./Info.vue";
import CategoryCreate from "./CategoryCreate.vue";
import CategoryUpdate from "./CategoryUpdate.vue";
import ImportConversations from "./ImportConversations.vue";
import I18n from "./I18n.vue";

import { app } from "../app/app.js";
const appTheme = app.theme;
const showSearch = app.showSearch;
const showCreateCategory = app.showCreateCategory;
const showMoveTo = app.showMoveTo;
const showImportChat = app.showImportChat;

const FilesRef = ref();
const TempRef = ref();

const gen = (type) => {
  console.log('type', type)
  nextTick(() => {
    TempRef.value.genImage(type);
  });
}

const handleCreateRes = () => {
  nextTick(() => {
    FilesRef.value.loadChatListDataHook();
  });
};

document.addEventListener("keydown", (event) => {
  // 检查按下的键是否是 command+shift+f
  if (event.key === "f" && event.shiftKey && event.metaKey) {

    // 执行相关操作
    if (!app.showSearch.value) {
      app.showSearch.value = true;
    }

    // 防止浏览器默认行为
    event.preventDefault();
  }
});

onMounted(() => {

});

</script>

<style scoped>
.normal-flex {
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
}
.padding-flex {
  padding: 0 15px; 
}
</style>