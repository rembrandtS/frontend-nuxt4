<script setup lang="ts">
import {useStore} from '@/stores/api';
import {useMouse} from '@vueuse/core';

// i18n 사용법
const {locales, setLocale} = useI18n();

// plugin을 통해 전역 함수나 composable 사용
const {$hi} = useNuxtApp();

// vueuse 컴포저블 모듈 사용해보기
const {x, y} = useMouse();

const store = useStore();
const {pending} = await useAsyncData("getNews", store.getNews);


const locale = ref('ko')
</script>

<template>
<div class="page">
  <div>
    <ULocaleSelect v-model="locale" :locales="Object.values(locales)" class="w-48" @update:model-value="setLocale($event)"/>
    <SwitchLocalePathLink v-for="locale in locales" :locale="locale.code">{{locale.name}}</SwitchLocalePathLink>
    <UButton loading-auto v-for="locale in locales" @click="setLocale(locale.code)" icon="i-lucide-rocket" color="neutral">
      {{ locale.name }}
    </UButton>
    <h1>{{ $t('welcome') }}</h1>
  </div>
  <NuxtLink to="/news">뉴스 보러 가기</NuxtLink>
  <USeparator orientation="vertical" class="h-48" />
  <NuxtLink to="/kiwoom">주식 보러 가기</NuxtLink>

  <div>
    플러그인 활용법 :
    {{$hi('nuxt4 & pinia')}}
  </div>

  <div>
    vueuse composable 모듈 사용 : 마우스 좌표값 찍어보기
    {{x}} , {{y}}
  </div>

  <UAlert
      title="hello"
      discription="인사를 사이좋게 나눠요~!"
      :avatar="{
      src: 'https://github.com/nuxt.png'
    }"
  />
  <UBadge>TEST/TEST</UBadge>
</div>
</template>

<style lang="scss" scoped>
//.page {
//  display: flex;
//  flex-wrap: wrap;
//  align-content: flex-start;
//  justify-content: center;
//
//  width: calc(100% - 96px);
//  padding: 48px;
//  gap: 24px;
//}
</style>