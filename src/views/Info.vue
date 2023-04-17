<template>
    <div style="width: 100%; display:flex;">
        <template v-if="lastUpdateTime > 0">
            {{ t('tempConversationUpdateTime') }}: &nbsp;
            <n-time :time="lastUpdateTime" format="yy/MM/dd HH:mm:ss" unix />
        </template>
    </div>
</template>

<script setup>
import { app } from "../app/app.js";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const lastUpdateTime = app.lastUpdateTime;
</script>