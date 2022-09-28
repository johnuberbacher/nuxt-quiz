<template>
  <div class="h-full w-full bg-gray-100 dark:bg-gray-700 overflow-y-auto">
    <div
      class="container mx-auto h-full flex max-w-screen-xl p-5"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-lg rounded-lg overflow-hidden m-auto"
      >
        <div>
          <img
            class="h-full object-cover"
            src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
          />
        </div>
        <div class="h-full col-span-2">
          <div v-if="loading">Loading posts...</div>
          <div v-if="error">{{ error.message }}</div>
          <div
            v-if="questions"
            class="bg-white dark:bg-gray-800 py-5 px-5 lg:py-10 lg:px-10 mx-auto"
          >
          <div class="flex flex-row items-center justify-end mb-14 lg:mb-20">
            <div class="text-white uppercase text-sm font-bold h-8 bg-primary-600 flex items-center rounded-l-full pl-5 pr-5 -mr-3">score</div>
            <div
              class="w-[56px] h-[56px] text-xl flex items-center justify-center bg-primary-500 text-white rounded-full font-bold"
            >
              {{ userScore }}
            </div>

          </div>
            <div
              class="bg-primary-500 py-10 px-10 xl:py-14 xl:px-20 mb-10 text-center rounded-2xl relative"
            >
              <div
                class="bg-primary-500 absolute top-0 left-0 right-0 max-w-fit my-0 mx-auto py-4 px-8 -top-8 rounded-full text-white font-bold"
              >
                {{ questions.results[currentQuestion].category }}
              </div>
              <div
                class="text-2xl lg:text-3xl text-white font-semibold"
                v-html="questions.results[currentQuestion].question"
              ></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <MultipleChoiceOption
                @validateAnswer="
                  validateAnswer(
                    questions.results[currentQuestion].correct_answer,
                    questions.results[currentQuestion].correct_answer
                  )
                "
                :answer="questions.results[currentQuestion].correct_answer"
              >
                {{ questions.results[currentQuestion].correct_answer }}
              </MultipleChoiceOption>
              <MultipleChoiceOption
                @validateAnswer="
                  validateAnswer(
                    incorrectAnswer,
                    questions.results[currentQuestion].correct_answer
                  )
                "
                :answer="incorrectAnswer"
                :key="incorrectAnswer"
                v-for="incorrectAnswer in questions.results[currentQuestion]
                  .incorrect_answers"
              >
                {{ incorrectAnswer }}
              </MultipleChoiceOption>
            </div>
            <div class="flex flex-row items-center w-full mt-5 lg:mt-10">
              <div
                class="bg-gray-200 dark:bg-gray-600 h-3 rounded-full w-full overflow-hidden"
              >
                <div
                  :style="'width: ' + (currentQuestion + 1) + '0%'"
                  class="transition ease-in-out bg-primary-600 h-3"
                ></div>
              </div>
              <div class="ml-5 text-sm font-semibold dark:text-white">
                {{ currentQuestion + 1 }}/10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useQuestionStore } from "@/stores/questions";
import { useUserStore } from "@/stores/user";

const { questions, currentQuestion, questionCount } = storeToRefs(
  useQuestionStore()
);
const { userScore } = storeToRefs(useUserStore());
const { fetchQuestions } = useQuestionStore();

await fetchQuestions();

function validateAnswer(answer, correctAnswer) {
  if (this.currentQuestion < this.questionCount) {
    if (answer == correctAnswer) {
      this.userScore++;
    }
    this.currentQuestion++;
  } else {
    console.log("finished");
  }
}
</script>
