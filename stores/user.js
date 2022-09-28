import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  id: "user",
  state: () => ({
    userScore: 0,
  }),
  actions: {
    async resetScore() {
      this.userScore = 0;
    },
  }
});
