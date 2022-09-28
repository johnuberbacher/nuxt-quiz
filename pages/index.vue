<template>
  <div class="h-full w-full bg-gray-100 dark:bg-gray-700 overflow-y-auto">
    <div
      class="container mx-auto h-full flex flex-col max-w-screen-lg px-5 pb-5"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 m-auto"
      >
        <QuizCategory
          :category="category"
          v-bind:key="category"
          v-for="category in questions.categories"
        ></QuizCategory>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuestionStore } from "@/stores/questions";
import { useUserStore } from "~~/stores/user";
const questions = useQuestionStore();
const { resetQuiz } = useQuestionStore();
const { resetScore } = useUserStore();

await resetScore();
await resetQuiz();

useHead({
  title: "Nuxt3 Quiz",
});
</script>
