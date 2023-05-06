<template>
  <n-card
    class="no-select"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
    style="width: 600px; position: fixed; top: 60px; left: 0; right: 0;"
  >
    <template #header>
      <div style="display: flex;align-items: center;justify-content: space-between;">
        <n-text tag="div">{{ t('fileOptionMove') }}</n-text>
        <n-button size="small" quaternary circle @click="app.showCreateCategory.value = false">
          <template #icon>
            <n-icon :component="CloseOutline" />
          </template>
        </n-button>
      </div>
    </template>

    <Category :id="1" :default="defalutCategoryId" :options="options" @selectCategory="moveHandle"></Category>

    <template #footer>
      <div style="width: 100%;display: flex;justify-content: flex-end;">
        <n-button strong tertiary type="success" @click="ensure">{{ t('submit') }}</n-button>
      </div>
    </template>
  </n-card>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { app } from "../app/app.js";
import { CloseOutline } from "@vicons/ionicons5";
import { useMessage } from 'naive-ui';
import Category from "./Category.vue";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const emit = defineEmits(['createResListen']);

const message = useMessage();
const moveHandle = (v) => {
  defalutCategoryId.value = v.v;
}
const ensure = async () => {
  try {
    await app.updateChatCategory(app.createCategoryId.value, defalutCategoryId.value + '');

    emit('createResListen');
    message.success(t('successfully'));
    app.showMoveTo.value = false;
  } catch (e) {
    message.warning(e);
  }
}

const defalutCategoryId = ref('1');
const options = ref([]);
onMounted(async () => {
  await nextTick(async () => {
    let c = await app.getChat(app.createCategoryId.value);
    defalutCategoryId.value = c.category
  });
  options.value = [];
  let categoryList = await app.getCategoryList();
  categoryList.forEach(item => {
    options.value.push({
      label: item.name,
      value: item.id
    });
  })
  console.log('coa', options)
});
</script>