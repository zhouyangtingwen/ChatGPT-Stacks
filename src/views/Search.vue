<template>
  <n-card
    id="searchWindow"  
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
    style="width: 600px; position: fixed; top: 60px; left: 0; right: 0;"
  >
    <template #header>
      <div style="display: flex;align-items: center;justify-content: space-between;">
        <n-text tag="div">{{ t('search') }}</n-text>
        <n-button size="small" quaternary circle @click="app.showSearch.value = false">
          <template #icon>
            <n-icon :component="CloseOutline" />
          </template>
        </n-button>
      </div>
    </template>

    <n-input
      ref="searchInput"
      @update:value="searchFn"
        type="text"
        placeholder="search"
        :loading="false"
        style="margin-bottom: 20px;"
        spellCheck={false}
    ><template #prefix><n-icon :component="Search" /></template></n-input>
        <!-- @keydown="chooseSelect" -->

    <n-space vertical>
    <n-tree
      class="search-res-height"
      ref="searchRes"
      expand-on-click
      block-line
      :data="data"
      default-expand-all
      :cancelable="false"
      virtual-scroll
      draggable
      :node-props="nodeProps"
      :render-label="app.renderTree"
    />
      <!-- :select-keys="nowChooseSelectKeys" -->
    </n-space>

    <template #footer>
      <div style="width: 100%;display: flex;justify-content: flex-end;">
        <template v-if="searchResText != ''">
          <n-text tag="div" v-html="app.sprintf(t('searchRes'), searchResText.split('_')[0], searchResText.split('_')[1])">
          </n-text>
        </template>
        <template v-else></template>
      </div>
    </template>
  </n-card>

</template>

<script setup>
import { h, ref, onMounted, nextTick } from "vue";
import { Search, CloseOutline } from "@vicons/ionicons5";
import { app } from "../app/app.js";
import { NText } from "naive-ui";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const searchInput = ref();
const searchRes = ref();
const searchResText = ref('');
const nowChooseSelectKeys = ref([]);
const data = ref([]);

const nodeProps = ({ option }) => {
  return {
    onClick() {
      if (!option.isLeaf) {
        return;
      }

      let chatId = option.key;
      if (typeof chatId === "undefined") {
        return;
      }
      console.log('search choose', chatId)

      app.getChatDetail(chatId);
      app.showSearch.value = false;
      app.getSetting('chat_sort').then(sort => {
        let s = 'asc';
        if (sort.k) {
          s = sort.v;
        }
        app.fileCheckedIds.value = [chatId];
        app.getChatList(s);
      });
    }
  }
};

const searchFn = async (search) => {
  try {
    let res = await app.searchChat(search);
    let fileTotal = 0;
    let resTotal = 0;
    if (res.length > 0) {
      res.forEach((e, idx) => {
        for (let i = 0; i < e.children.length; i++) {
          fileTotal += 1;
          if (typeof e.children[i].suffix === "undefined" ) {
            continue;
          }
          let copySuffix = e.children[i].suffix;
          resTotal += Number(copySuffix);
          e.children[i].suffix = () => h(NText, {tag: "div"}, () => [ 
            "查找到 ",
            h(NText, {type: "success"}, { default: () => copySuffix }),
            " 个结果"
          ]);
        }
      });
    }
    data.value = res;
    if (0 == fileTotal) {
      searchResText.value = '';
    } else {
      searchResText.value = `${fileTotal}_${resTotal}`;
    }
  } catch {

  }
}

const chooseSelect = (e) => {
  return;
  handleChooseSelect(e);
}

const handleChooseSelect = (event) => {
  console.log('event.key', event.key)
  if (data.value.length > 0) {
    if (event.key == 'ArrowUp') {
      for (let i = data.value.length - 1; i >= 0; i--) {
        let item = data.value[i];
        if (handleChooseSelectChildren(item.children)) {
          return;
        }
      }
    } else if (event.key == 'ArrowDown') {
      for (let i = 0; i <= data.value.length - 1; i++) {
        let item = data.value[i];
        if (handleChooseSelectChildren(item.children)) {
          return;
        }
      }
    }
  }
}

const handleChooseSelectChildren = (event, children) => {
  if (event.key == 'ArrowUp') {
    for (let i = children.length - 1; i >= 0; i--) {
      let item = children[i];
      console.log('item', item, nowChooseSelectKeys.value)
      if (nowChooseSelectKeys.value.length < 1) {
        nowChooseSelectKeys.value = [item.key];
        return true;
      } else if (item.key != nowChooseSelectKeys.value[0]) {
        nowChooseSelectKeys.value = [item.key];
        return true;
      }
      console.log('key', item.key, nowChooseSelectKeys.value)
    }
  } else if (event.key == 'ArrowDown') {
    for (let i = 0; i <= children.length - 1; i++) {
      let item = children[i];
      console.log('item', item, nowChooseSelectKeys.value)
      if (nowChooseSelectKeys.value.length < 1) {
        nowChooseSelectKeys.value = [item.key];
        return true;
      } else if (item.key != nowChooseSelectKeys.value[0]) {
        nowChooseSelectKeys.value = [item.key];
        return true;
      }
      console.log('key', item.key, nowChooseSelectKeys.value)
    }
  }
  return false;
}

onMounted(() => {
  nextTick(() => {
    searchInput.value.focus()
    // document.querySelector("#searchWindow").addEventListener("keydown", function(event) {
    //   handleChooseSelect(event);
    // });
  })
})
</script>

<style scoped>
.search-res-height {
  height: calc(100vh - 50vh);
  /* height: 700px; */
}
</style>