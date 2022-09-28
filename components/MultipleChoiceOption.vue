<template>
  <div
    @click="$emit('validateAnswer')"
    class="flex flex-col items-center rounded p-5 bg-gray-100 dark:bg-gray-600 hover:bg-primary-500 hover:shadow-lg group cursor-pointer"
  >
    <div
      v-html="answer"
      class="font-semibold dark:text-white group-hover:text-white"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps(["index", "answer"]);
</script>
