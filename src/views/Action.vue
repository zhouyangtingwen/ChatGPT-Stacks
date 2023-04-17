<template>
  <n-button style="width: 140px" secondary size="small" type="primary" @click="app.createChatgptWindow">
    <template #icon>
      <n-image style="background-color: white;border-radius: 100%;" preview-disabled width="18" height="18" :src="chatGPTLogo"></n-image>
    </template>
    {{ t('openChatgpt') }}
  </n-button>
</template>

<script setup>
import { app } from "../app/app.js";
import chatGPTLogo from '/chatgpt-logo.png';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>