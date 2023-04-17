<template>
  <n-select style="width: 120px" v-model:value="i18nVal" @update:value="updateI18" size="small" :options="options" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import i18n from "../language/i18n";
import { app } from "../app/app.js";

const i18nVal = ref('');
const options = ref([]);

const updateI18 = (v) => {
  i18n.global.locale = v;
  app.setSetting('chat_i18n', v);
}

const i18nDesc = {
  en: "Endlish",
  zh: "简体中文",
};

onMounted(async () => {
  i18n.global.availableLocales.forEach(item => {
    options.value.push({
      value: item,
      label: i18nDesc[item],
    })
  });
  i18nVal.value = await app.getI18n();
});
</script>