<template>
    <n-card class="varborder" :bordered="false" style="position: fixed; width: 270px; top:60px;left: 0;z-index: 999;" :content-style="{padding: '20px 0'}">
      <div style="display:flex; justify-content: space-between; padding: 0 15px;">
        <n-tooltip placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="showImportChat">
              <template #icon>
                <!-- <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M6.614 3.143a.75.75 0 1 1 .772-1.286c1.347.808 2.34 1.785 2.98 3.135c.63 1.33.884 2.955.884 5.008v5.44l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V10c0-1.947-.245-3.321-.74-4.366c-.486-1.026-1.243-1.799-2.396-2.49z" fill="currentColor"></path></g></svg> -->
                <n-icon :component="ArchiveIcon"></n-icon>
              </template>
            </n-button>
          </template>
          {{ t('fileSettingsImportChat') }}
        </n-tooltip>

        <n-tooltip placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="showCreateCategory('cate')">
              <template #icon>
                <n-icon :component="DuplicateOutline" />
              </template>
            </n-button>
          </template>
          {{ t('fileSettingsCreateCategory') }}
        </n-tooltip>

        <n-tooltip v-if="false" placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="select">
              <template #icon>
                <n-icon :component="ReorderFourOutline" />
              </template>
            </n-button>
          </template>
          新建分类
        </n-tooltip>

        <n-tooltip placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="refresh('true')">
              <template #icon>
                <svg v-if="sortVal == 'asc'" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.39-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160z" fill="currentColor"></path></svg>
                <svg v-else  width="15" height="15"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" fill="currentColor"></path></svg>
              </template>
            </n-button>
          </template>
          {{ t('fileSettingsSort') }}
        </n-tooltip>

        <n-tooltip placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="refresh('false')">
              <template #icon>
                <n-icon :component="Refresh" />
              </template>
            </n-button>
          </template>
          {{ t('fileSettingsRefresh') }}
        </n-tooltip>

        <n-tooltip placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle @click="app.showSearch.value = true">
              <template #icon>
                <n-icon :component="Search" />
              </template>
            </n-button>
          </template>
          {{ t('fileSettingsSearch') }}
        </n-tooltip>
        
        <n-tooltip v-if="false" placement="bottom" :show-arrow="false" trigger="hover">
          <template #trigger>
            <n-button size="small" circle>
              <template #icon>
                <n-icon :component="iconR" />
              </template>
            </n-button>
          </template>
          收起
        </n-tooltip>
        
      </div>
    </n-card>
    <div style="width: 100%; height: 70px;">
    </div>
    
    <div v-if="false" style="position: fixed; width: 240px; top:60; background-color: black; z-index: 999">
        <n-button circle>
            <template #icon>
                <n-icon :component="Search" />
            </template>
        </n-button>

        <n-button circle>
            <template #icon>
                <n-icon :component="Search" />
            </template>
        </n-button>
    </div>
    
</template>

<script setup>
import { app } from "../app/app.js";
import { ref, onMounted } from "vue";
import { Refresh, Search, ArrowBack, ReorderFourOutline, ArrowForward, DuplicateOutline, AddSharp, ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const iconR = ref(ArrowBack);
const sortVal = ref('asc');

const showImportChat = () => {
  app.showImportChat.value = true;
}

const showCreateCategory = (since) => {
  app.createCategorySince.value = since;
  app.createCategoryType.value = 'create';
  app.showCreateCategory.value = true;
};

const emit = defineEmits(['action']);
const select = () => {
  let e = {
    'key': 'select',
    'val': '',
  };
  emit('action', e);
}
const refresh = (sort = 'false') => {
  if ('true' == sort) {
    sortVal.value = sortVal.value == 'asc' ? 'desc' : 'asc';
    app.setSetting('chat_sort', sortVal.value);
  }
  let e = {
    'key': 'refresh',
    'val': sortVal.value,
  };
  emit('action', e);
}
onMounted(async () => {
  let sort = await app.getSetting('chat_sort');
  if (!sort.k) {
    app.setSetting('chat_sort', sortVal.value);
  } else {
    sortVal.value = sort.v;
  }
  refresh();
});
</script>

<style>
.varborder {
/* rgba(0, 0, 0, 0.1) */
  box-shadow: 0 5px 10px -5px var(--n-border-color);
}
</style>