<template>
    <div style="width: 100%; display:flex;flex-direction: row;align-items: center;">
        <n-image :width="40" :height="40" :preview-disabled="true" src="/icon_256X256.png" />
        <n-divider vertical />
        <n-a href="https://github.com/zhouyangtingwen/chatgpt-stacks" target="_blank">ChatGPTStacks (v1.0.6)</n-a>
        <n-divider vertical />
        <n-button circle ghost size="tiny" @click="updateJs">
            检查升级
        </n-button>
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
import {
  checkUpdate,
  installUpdate,
  onUpdaterEvent,
} from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'
import { type as tauriPlatform } from '@tauri-apps/api/os';
import { onMounted } from "vue";

const clearQa = () => {
    app.qaList.value = [];
    app.fileCheckedIds.value = [];
    app.breadcrumb.value = [];
    app.lastUpdateTime.value = 0;
}

const updateJs = async () => {
    const isDev = true;
    if (isDev) {
        console.log('dev can not update');
        return;
    }
    try {
      const { shouldUpdate, manifest } = await checkUpdate()

      if (shouldUpdate) {
        // You could show a dialog asking the user if they want to install the update here.
        console.log(
          `Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`
        )
        let p = await tauriPlatform();

        // Install the update. This will also restart the app on Windows!
        await installUpdate();

        console.log('p!!', p);
        if (p == 'Darwin' || p == 'Linux') {
            console.log('relanuch');
            // On macOS and Linux you will need to restart the app manually.
            // You could use this step to display another confirmation dialog.
            await relaunch();
        }
        return;
      }
    } catch (error) {
      console.error(error)
    }
}
</script>