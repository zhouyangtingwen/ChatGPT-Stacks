<template>
    <div style="width: 100%; display:flex;justify-content: center;align-items: center;">
        <template v-if="lastUpdateTime > 0">
            <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                    <svg style="cursor: pointer;margin-right: 20px;" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M4.507 6.008A3.243 3.243 0 0 0 3 8.75v10.5c0 2.9 2.35 5.25 5.25 5.25h10.5a3.247 3.247 0 0 0 2.744-1.508l-.122.006l-.122.002h-13a3.75 3.75 0 0 1-3.75-3.75v-13c0-.081.002-.162.007-.242zM8.75 3A3.25 3.25 0 0 0 5.5 6.25v12.5A3.25 3.25 0 0 0 8.75 22h12.5a3.25 3.25 0 0 0 3.25-3.25V6.25A3.25 3.25 0 0 0 21.25 3H8.75zm-.582 17.401l6.307-6.178a.75.75 0 0 1 .966-.07l.084.07l6.306 6.178a1.749 1.749 0 0 1-.581.099H8.75c-.204 0-.4-.035-.582-.099zM8.75 4.5h12.5c.966 0 1.75.784 1.75 1.75v12.5c0 .208-.036.408-.103.593l-6.322-6.191a2.25 2.25 0 0 0-3.02-.117l-.13.117l-6.322 6.192A1.747 1.747 0 0 1 7 18.75V6.25c0-.966.784-1.75 1.75-1.75zm2.75 3.251a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499z" fill="currentColor"></path></g></svg>
                </template>
                <span>{{ t('tempGenImage') }}</span>
            </n-tooltip>
            <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                    <svg style="cursor: pointer;margin-right: 20px;" width="25" height="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4z" fill="currentColor"></path><path d="M21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5l5-5z" fill="currentColor"></path><path d="M28 4V2h-6v10h2V8h3V6h-3V4h4z" fill="currentColor"></path><path d="M17 12h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1V5a1.001 1.001 0 0 0-1-1h-2z" fill="currentColor"></path><path d="M9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM6 7V4h3l.001 3z" fill="currentColor"></path></svg>
                </template>
                <span>{{ t('tempGenPdf') }}</span>
            </n-tooltip>
            <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                    <div style="cursor: pointer;display: flex;align-items: center;justify-content: center;">
                        <svg style="margin-right: 2px"  width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" fill="currentColor"></path></svg>
                        <n-time :time="lastUpdateTime" format="yy/MM/dd HH:mm:ss" unix />
                    </div>
                </template>
                <span>{{ t('tempConversationUpdateTime') }}</span>
            </n-tooltip>
        </template>
    </div>
</template>

<script setup>
import { app } from "../app/app.js";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const lastUpdateTime = app.lastUpdateTime;
</script>