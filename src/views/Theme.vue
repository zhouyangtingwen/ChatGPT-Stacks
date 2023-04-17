<template>
  <n-switch v-model:value="themeSwitch" @update:value="active">
    <template #checked-icon>
      <n-icon :component="Moon" />
    </template>
    <template #unchecked-icon>
      <n-icon color="#FFAA33" :component="Sunny" />
    </template>
  </n-switch>
</template>

<script setup>
import { Sunny, Moon } from "@vicons/ionicons5";
import { app } from "../app/app.js";
const themeSwitch = app.themeSwitch
const emit = defineEmits(['darkModeListen']);
const active = (res) => {
  emit('darkModeListen', res);
};
</script>