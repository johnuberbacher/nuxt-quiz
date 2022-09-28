import { defineStore } from "pinia";

export const useQuestionStore = defineStore("questions", {
  id: "questions",
  state: () => ({
    currentQuestion: 0,
    currentCategory: 11,
    questionCount: 10,
    questions: [],
    categories: [
      {
        name: "General Knowledge",
        id: 11,
        icon: "💡",
      },
      {
        name: "Science & Nature",
        id: 17,
        icon: "🔬",
      },
      {
        name: "Science: Mathematics",
        id: 24,
        icon: "🧮",
      },
      {
        name: "Entertainment: Books",
        id: 10,
        icon: "📚",
      },
      {
        name: "Entertainment: Film",
        id: 11,
        icon: "📽️",
      },
      {
        name: "Art",
        id: 25,
        icon: "🎭",
      },
      {
        name: "Politics",
        id: 24,
        icon: "🏛️",
      },
      {
        name: "History",
        id: 23,
        icon: "📜",
      },
      {
        name: "Geography",
        id: 22,
        icon: "🗺️",
      },
    ],
  }),
  actions: {
    async fetchQuestions() {
      this.questions = [];
      try {
        this.questions = await fetch(
          `https://opentdb.com/api.php?amount=${this.questionCount}&category=${this.currentCategory}`
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
