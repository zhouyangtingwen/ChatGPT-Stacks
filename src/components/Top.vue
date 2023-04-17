<script setup>
import { ref } from "vue";

import { WebviewWindow } from '@tauri-apps/api/window'

const openCollect = () => {
    const webview = new WebviewWindow('theUniqueLabel', {
      url: 'collect.html',
      titleBarStyle: 'overlay',
      hiddenTitle: true,
      width: 200,
      height: 300,
      resizable: false,
      fileDropEnabled: false,
      alwaysOnTop: true
    })
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once('tauri://created', function () {
      // webview window successfully created
        console.log('new', webview.label)
    
    })
    webview.once('tauri://error', function (e) {
      // an error occurred during webview window creation
    })
}
</script>

<template>
    <div class="top-content">
        <svg t="1670422781084" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11091" width="20" height="20"><path d="M899.09 414.89c-4.47-23.37-18.44-38.43-35.51-37.98h-3.47c-58.61 0-106.26-47.66-106.26-106.27 0-19.35 9.22-40.44 9.22-40.62 9.04-20.36 2.1-45.37-16.16-58.16l-1-0.64-102.25-56.78-1-0.45c-6.02-2.65-12.69-3.93-19.71-3.93-14.61 0-28.85 5.84-38.16 15.52-12.5 12.88-51.86 46.38-83.62 46.38-32.04 0-71.66-34.14-84.17-47.2-9.4-9.95-23.74-15.79-38.53-15.79-6.94 0-13.42 1.28-19.35 3.83l-1.28 0.37-105.81 58.15-1 0.73c-18.35 12.78-25.38 37.7-16.34 58.06 0.09 0.18 9.22 21.45 9.22 40.72 0 58.61-47.65 106.26-106.26 106.26h-3.56c-17.07-0.46-31.04 14.61-35.51 37.98-0.37 1.92-8.58 45.74-8.58 80.16 0 34.51 8.22 78.33 8.58 80.15 4.38 23.1 17.98 38.07 34.87 38.07h4.2c58.61 0 106.26 47.65 106.26 106.26 0 19.35-9.22 40.45-9.22 40.63-9.04 20.35-2.1 45.37 16.16 58.15l1 0.64 100.33 56.14 1 0.45c6.03 2.65 12.6 4.02 19.72 4.02 14.7 0 29.13-6.03 38.43-16.16 11.78-12.78 52.68-49.3 85.45-49.3 33.05 0 73.31 36.24 86 50.21 9.31 10.32 23.83 16.43 38.62 16.43 6.94 0 13.33-1.28 19.36-3.84l1.09-0.45 103.8-57.79 1-0.73c18.26-12.78 25.29-37.79 16.25-58.06-0.09-0.19-9.22-21.46-9.22-40.72 0-58.61 47.65-106.27 106.26-106.27h3.56c17.07 0.37 31.04-14.61 35.51-37.98 0.37-1.83 8.58-45.64 8.58-80.16-0.01-34.38-8.13-78.2-8.5-80.03z m-402.14 221.2c-78.05 0-141.6-63.54-141.6-141.59 0-78.06 63.54-141.59 141.6-141.59 78.05 0 141.59 63.54 141.59 141.59 0 78.05-63.54 141.59-141.59 141.59z" p-id="11092" fill="#ffffff"></path><path d="M495.77 411.31c-45.13 0-81.92 36.72-81.92 81.92 0 45.12 36.72 81.92 81.92 81.92 45.12 0 81.92-36.72 81.92-81.92-0.08-45.2-36.72-81.92-81.92-81.92z" p-id="11093" fill="#ffffff"></path></svg>
        <svg @click="openCollect" t="1670423104964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16906" width="24" height="24"><path d="M260.642133 707.4816v55.842133h55.876267V819.2H204.8v-111.7184h55.842133zM819.2 819.2h-111.7184v-55.842133l55.842133-0.034134v-55.842133H819.2V819.2z m-83.797333-363.042133v251.323733h-335.121067v-251.323733h335.121067z m-167.560534-139.639467v111.684267H372.394667v167.594666H288.597333V316.5184h279.2448zM316.5184 204.8v55.842133H260.642133v55.876267H204.8V204.8h111.7184zM819.2 204.8v111.7184h-55.842133l-0.034134-55.876267h-55.842133V204.8H819.2z" fill="#ffffff" p-id="16907"></path></svg>
    </div>
</template>

<style scoped>
.icon {
    cursor: pointer;
    margin-right: 16px;
}
.top-content {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>