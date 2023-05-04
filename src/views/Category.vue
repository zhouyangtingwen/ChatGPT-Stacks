<template>
  <n-select
    :placeholder="t('category')"
    :options="props.options.value"
    @update:value="handleUpdateValue"
    v-model:value="props.default"
    :default-value="props.default"
  />
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps(['id', 'default', 'options']);

const emit = defineEmits(['selectCategory']);
const handleUpdateValue = (v) => {
  emit('selectCategory', {
    id: props.id,
    v: v
  });
}

onMounted(async () => {
  // console.log('props!', props.options)
});
</script>