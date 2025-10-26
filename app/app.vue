<template>
  <div>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
    <div>
      <span>{{fullName}}</span>
      <button @click="fullName = 'sanghyun shin'">이름 변경</button>
      <button @click="greet">Greet</button>
    </div>
  </div>
</template>
<script setup lang="ts">

const state = reactive({count : 0}); // 객체 자체를 반응형으로 만든다. 한계 : 원시타입 사용 불가, 구조분해 시 반응/연결성 상실-> 하드copy
const status = ref<string | number>("1111"); // 특수한 객채로 만든다. java data 객체처럼 말이다.

state.count++;
status.value = 2222;

const raw = {}
const proxy = reactive(raw)

// proxy는 원본과 같지 않습니다. => 즉, 원본인 raw를 바꾼다고 proxy 가 업데이트 되지 않습니다.
console.log(proxy === raw) // false

const firstName = ref<string>('rembrandt')
const lastName = ref<string>('van')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue:string) {
    // 참고: 여기서는 구조 분해 할당 문법을 사용하고 있습니다.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event`는 네이티브 DOM 이벤트입니다
  if (event) {
    alert(event.target.tagName)
  }
}

const todoId = ref(1)
const data = ref(null)
//
// watch(
//     todoId,
//     async () => {
//       const response = await fetch(
//           `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//       )
//       data.value = await response.json()
//     },
//     { immediate: true }
// )

// 위 watch 문에서 'todoId' 명시적 사용도 되지만 아래 'todoId' 사용하는 것(의존적 추적으로 연결인 경우) wathchEffect를 사용하면 편리하다.
watchEffect(async () => {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})

// 비동기로 로드될 데이터 처리 방식
const asyncData = ref(null)

watchEffect(() => {
  if (asyncData.value) {
    // 데이터가 로드되었을 때 실행
  }
})

watchPostEffect(() => {
  /* Vue 업데이트 이후에 실행됨 */
})

// const router = useRouter();
// router.getRoutes().forEach((item) => {console.log("getRoutes",item.path);});
</script>