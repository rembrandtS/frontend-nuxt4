import { defineStore } from 'pinia';


export const useTestStore = defineStore("test", () => {
    // state
    const test = ref<string>("test");

    // getters


    // actions


    return {test};
});