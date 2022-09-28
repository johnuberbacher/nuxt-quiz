<template>
  <NuxtLink
    to="/quiz"
    class="bg-white dark:bg-gray-800 hover:bg-primary-500 hover:shadow-lg dark:text-white hover:text-white mx-auto flex items-center justify-center h-full w-full block shadow hover:shadow-xl rounded-lg overflow-hidden mt-5"
  >
    <div class="px-5 py-10 lg:p-14 text-center relative">
      <h2 class="text-xl font-semibold">
        <div class="text-7xl mb-5">{{category.icon}}</div>
        {{ category.name }}
      </h2>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps(["category"]);
</script>
