<template>
  <n-spin :show="loading" 
    style="width: 600px; position: fixed; top: 60px; left: 0; right: 0;"
  >
  <n-card
    class="no-select"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <template #header>
      <div style="display: flex;align-items: center;justify-content: space-between;">
        <n-text tag="div">{{ t('fileSettingsImportChat') }}</n-text>
        <n-button size="small" quaternary circle @click="app.showImportChat.value = false">
          <template #icon>
            <n-icon :component="CloseOutline" />
          </template>
        </n-button>
      </div>
    </template>

    <template v-if="importList.length > 0">
      <n-data-table
        :columns="columns"
        :data="importList"
        :max-height="250"
        :scrollbar-props="{
          trigger: 'none'
        }"
      />
    </template>
    <template v-else>
      <div
        class="dropmain"
        @click="openFile"
      >
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <archive-icon />
          </n-icon>
        </div>
        <n-p depth="3" style="margin: 8px 0 0 0;font-size: 16px;text-align: center;">
          {{ t('fileDropImportChat') }}
        </n-p>
      </div>
    </template>

    <template #footer>
      <div style="width: 100%;display: flex;justify-content: flex-end;">
        <n-button strong tertiary type="success" @click="ensure">{{ t('submit') }}</n-button>
      </div>
    </template>
  </n-card>
  </n-spin>
</template>

<script setup>
import { ref, onMounted, h, watch, nextTick } from "vue";
import { app } from "../app/app.js";
import { File } from "../app/file.js";
import { CloseOutline, ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { useMessage, NText } from 'naive-ui';
import Category from "./Category.vue";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const loading = ref(false);

const selectCategoryHandle = (val) => {
  if (importList.value.length < 1) {
    return;
  }
  if (val.id == 'title') {
    for (let idx = 0; idx < importList.value.length; idx++) {
      importList.value[idx].category = val.v;
    }
  } else {
    let idx = val.id;
    importList.value[idx].category = val.v;
  }
}
const columns = ref([
  {
    title () { return h( NText, { size: 14, }, { default: () => t('title') }) },
    key: 'title'
  },
  {
    title () { 
      return h('div', {}, [
          h( NText, { size: 14, }, { default: () => t('category') }),
          h(Category, {
            id: 'title',
            default: defalutCategoryId,
            options: options,
            onSelectCategory: selectCategoryHandle,
          }, () => { }),
      ]);
    },
    key: 'category',
    render(val, idx) {
      return h(Category, {
        id: idx,
        default: val.category,
        options: options,
        onSelectCategory: selectCategoryHandle,
      }, () => {});
    }
  }
]);

const formatConversations = (jsonArr) => {
  if (typeof jsonArr === "undefined") {
    return false;
  }
  if (jsonArr.length < 1) {
    return false;
  }

  let res = [];
  for (let i = 0; i < jsonArr.length; i++) {
    let json = jsonArr[i];
    if (typeof json.mapping === "undefined") {
      continue;
    }
    let title = json.title;

    let qaList = [];
    for (const data of Object.values(json.mapping)) {
      if (typeof data.message === "undefined" || !data.message) {
        continue;
      } else if (null === data.message) {
        continue;
      }
      
      if (typeof data.message.author === "undefined") {
        continue;
      } else if (data.message.author.role === "system") {
        continue;
      } else if (typeof data.message.content.parts === "undefined") {
        continue;
      } else if (data.message.content.parts.length < 1) {
        continue;
      } else if (data.message.content.parts[0] == '') {
        continue;
      }

      let typed = data.message.author.role == 'user' ? 3 : 4;

      for (const part of data.message.content.parts) {
        qaList.push({
          typed: typed,
          html: part,
          content: part, 
        })
      }
    }

    let chatIdTemp;
    if (typeof json.id === "undefined") {
      chatIdTemp = new Date().getMilliseconds()
    } else {
      chatIdTemp = json.id;
    }

    res.push({
      chatId: chatIdTemp,
      title: title,
      category: defalutCategoryId.value,
      qaList: qaList,
    })
  }
  return res;
}

const defalutCategoryId = ref(1);
const importList = ref([]);
const setImportList = async (path) => {
  try {
    loading.value = true;
    importList.value = [];

    let contents = await File.readTextFile(path);
    let jsonArr = JSON.parse(contents);
    let format = formatConversations(jsonArr);
    console.log('format!', format)
    if (format !== false) {
      importList.value = importList.value.concat(format);
    }

    console.log('contents', importList.value);
    await nextTick();
    loading.value = false;
  } catch (e) {
    await nextTick();
    loading.value = false;
    console.log('catch', e)
  }
}
watch(app.showImportChatFileDrop, async (newVal, oldVal) => {
  if (newVal.payload.length < 1) {
    return;
  }
  for (let i = 0; i < newVal.payload.length; i++) {
    await setImportList(newVal.payload[i]);
  }
});

const message = useMessage();

const ensure = async () => {
  try {
    if (importList.value.length < 1) {
      return; 
    }
    loading.value = true;

    for (const v of importList.value) {
      var jsonList = JSON.stringify({list: v.qaList})
      await app.saveHtml(v.chatId + '', v.title, v.category + '', jsonList)
    }

    message.success(t('successfully'));
    await nextTick();
    app.showImportChat.value = false;
    loading.value = false;
  } catch (e) {
    await nextTick();
    loading.value = false;
    message.warning(e);
  }
}

const openFile = async () => {
  let path = await File.openLocalFile('JSON', ['json', 'JSON']);
  setImportList(path);
}

const options = ref([]);
onMounted(async () => {
  options.value = [];
  let categoryList = await app.getCategoryList();
  defalutCategoryId.value = categoryList[0].id

  categoryList.forEach(item => {
    options.value.push({
      label: item.name,
      value: item.id
    });
  })
  console.log('cateList', options)
});
</script>

<style scoped>
.dropmain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: inherit;
  height: 100%;
  padding: 20px;
  border: 1px dashed rgba(50, 50, 50, 0.5);
  border-radius: 10px;
  cursor: pointer;
}
</style>