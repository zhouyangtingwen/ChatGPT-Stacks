<template>
    <div style="width: 100%; display:flex;flex-direction: row;align-items: center;">
        <n-image :width="40" :height="40" :preview-disabled="true" src="/icon_256X256.png" />
        <n-divider vertical />
        <n-a href="https://github.com/zhouyangtingwen/chatgpt-stacks" target="_blank">ChatGPTStacks (v1.0.2)</n-a>
        <n-divider vertical />
        <n-button circle ghost size="tiny" @click="clearQa">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="25" height="25"><path d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z" fill="currentColor"></path></svg>
            </template>
        </n-button>
    </div>
</template>

<script setup>
import { app } from "../app/app.js";

const clearQa = () => {
    app.qaList.value = [];
    app.fileCheckedIds.value = [];
    app.breadcrumb.value = [];
    app.lastUpdateTime.value = 0;
}

</script>