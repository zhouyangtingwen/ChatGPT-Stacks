<script setup>
import { defineComponent, ref } from 'vue';
import Top from './components/Top.vue';
import Editor from './components/Editor.vue';

const topComponent = ref();
</script>

<template>
  <div class="container">
    <div data-tauri-drag-region class="_top-container2">
      <!-- <Top ref="topComponent" /> -->
      123
    </div>

    <div class="kuangjia">
      <div class="k1">
        <div class="menu-container">
          <div class="menu-item menu-item-active">发现</div>
          <div class="menu-item">我的</div>
          <div class="menu-item">处理中心</div>
        </div>
      </div>
      <div class="k2">
        <div class="scroll-container">
        start
        12
        ...
          <br />
          ...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />
          ...
          <br />
          ...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />
          33
          12
        ...
          <br />
          ...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />
          ...
          <br />
          ...
          8899
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kuangjia {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
}
.k1 {
  width: 100vw;
  height: 50px;
  /* background-color: rgba(0, 47, 167, 0.9); */
  /* background-color: rgba(32, 93, 217, 1); */
  background-color: rgba(0, 42, 151, 0.75);
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; */
}
.k2 {
  width: 100%;
  height: 100%;
  /* background-color: rgba(31, 101, 222, 1); */
  background-color: rgba(11, 81, 193, 0.75);
  position: relative;
}

.logo {
  margin-bottom: 60px;
}

.menu-container {
  /* padding-left: 20px */
}
.menu-item {
  color: rgb(240, 240, 240);
  font-size: 14px;
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;
}

.menu-item-active {
  background-color: rgba(11, 81, 193, 0.75);
}

.menu-item:first-child {
  margin-top: 20px;
}

.menu-container, .scroll-container {
  padding-top: 34px;
}

.scroll-container {
  padding: 34px 24px 24px 24px;
  text-align: center; 
  position: absolute;
  overflow: overlay; width: inherit; 
  height: 100%;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #4B5563;
}

._top-container2 {
  z-index: 99;
  position: fixed;top: 0;left: 0; right: 0; margin: auto;width: 100vw;height: 30px;
  /* background-color: rgb(240, 240, 240); */
}
</style>
