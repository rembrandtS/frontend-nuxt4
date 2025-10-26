// pinia 로 만들어진 store 는 reactive 로 이미 래핑되어 있는 객체이다.
// 그러므로 구조 분해 할당(ref, refs)을 하면 반응성을 잃게 된다.
// 만약 구조 분해 할당을 하고 반응성을 유지하려면, pinia 의 storeToRefs 를 사용해야 한다.

import { defineStore } from 'pinia';

// Composition(Setup) 방식
export const useCompositionStore = defineStore("composition", () => {
    // state
    const count = ref<number>(22);
    const name = ref<string>('79storm');

    // getters
    const doubleCount = computed(() => count.value * 2);
    const tripleCount = computed(() => count.value * 3);

    // actions
    function increment() {
        count.value++;
    }

    return { count, name, doubleCount, tripleCount, increment };
});

// Options API 방식
export const useOptionsStore = defineStore('options', {
    state: () => ({
        count: 11,
        name: 'rembrandt',
    }),
    getters: {
        doubleCount : (state ) => state.count * 2, // Arrow 합수 양식에서는 this 미사용
        tripleCount() : number {    // {} 문은 return 명시
          return this.count * 3;    // 일반 함수 양식에서는 this 사용
        }
    },
    actions: {  // vuex 에 mutation 기능 포함-state 변경 기능, 백엔트 사용, 비동기 처리도 가능
        // `this`를 사용하므로, 화살표 함수는 사용할 수 없습니다
        increment() {
            this.count++;
        },
        randomizeCounter() {
            this.count = Math.round(100 * Math.random())
        },
    },
});