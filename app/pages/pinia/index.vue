<!--pinia store 사용 테스트  -->
<script setup lang="ts">
import {useOptionsStore} from '~/stores/pinia';
import {useCompositionStore} from '~/stores/pinia';

const storeOptions = useOptionsStore(); // Options API 방식 - pinia store 에서 가져온 객체는 기본 반응성 유지
const storeComposition = useCompositionStore(); // Composition API 방식 - pinia store 에서 가져온 객체는 기본 반응성 유지

// const {count, name, doubleCount, tripleCount, increment} = storeOptions; // 구조 분해된 변수에는 반응성 상실 (toRef, toRefs 마찬가지)
const {count, name, doubleCount, tripleCount, increment} = storeToRefs(storeComposition); // storeToRef 로 하면 반응성 유지

</script>

<template>
  <div class="pinia">
    <h1>반응성 유지 - pinia 반응성 기본</h1>
    {{ storeOptions.count }} // {{ storeOptions.name }}
    <br>
    {{ storeOptions.doubleCount }} // 2배수
    <br>
    {{ storeOptions.tripleCount }} // 3배수
    <br>
    <button @click="storeOptions.increment">카운트 +1</button>
  </div>

  <div class="pinia">
    <h1>반응성 상실 - 구조 분해</h1>
    {{count}} // {{name}}
    <br>
    {{doubleCount}} // 2배수
    <br>
    {{tripleCount}} // 3배수
    <br>
    <button @click="increment">카운트 +1</button>
  </div>
</template>

<style lang="scss" scoped>
.pinia {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
</style>