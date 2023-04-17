<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item  :clickable="false" v-for="item in breadcrumbList">
      {{ item }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { app } from "../app/app.js";
const breadcrumbList = app.breadcrumb;
</script>