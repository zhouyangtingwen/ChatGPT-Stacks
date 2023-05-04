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
        <n-text tag="div">{{ type == 'create' ? t('create') : t('update') }}{{ since == 'chat' ? t('conversation') : t('category') }}</n-text>
        <n-button size="small" quaternary circle @click="app.showCreateCategory.value = false">
          <template #icon>
            <n-icon :component="CloseOutline" />
          </template>
        </n-button>
      </div>
    </template>

    <n-input 
      ref="cInput"
      v-model:value="name" 
      type="text" 
      :placeholder="type == 'create' ? (since == 'chat' ? t('fileSettingsCreateCategoryPlaceholder1') : t('fileSettingsCreateCategoryPlaceholder3')) : (since == 'chat' ? t('fileSettingsCreateCategoryPlaceholder2') : t('fileSettingsCreateCategoryPlaceholder4'))" 
      autofocus
      />

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

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const cInput = ref();
const type = app.createCategoryType;
const since = app.createCategorySince;

const emit = defineEmits(['createResListen']);

const message = useMessage();
const name = ref('');
const ensure = async () => {
  try {
    if (app.createCategoryType.value == 'update') {
      if (app.createCategorySince.value == 'chat') {
        await app.updateChat(app.createCategoryId.value, name.value);
      } else {
        await app.updateCategory(app.createCategoryId.value, name.value);
      }
    } else {
      await app.createCategory(name.value);
    }
    emit('createResListen');
    message.success(t('successfully'));
    app.showCreateCategory.value = false;
  } catch (e) {
    message.warning(e);
  }
}

onMounted(() => {
  nextTick(() => {
    if (app.createCategoryType.value == 'update') {
      name.value = app.createCategoryName.value;
    }

    cInput.value.focus();
  });
});
</script>