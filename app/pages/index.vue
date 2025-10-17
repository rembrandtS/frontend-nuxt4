<script setup lang="ts">
import CardComponent from './news/components/Card.vue';
import {useStore} from '@/stores/api';

const store = useStore();
const {pending} = await useAsyncData("getNews", store.getNews);
</script>

<template>
<div class="page">
  <NuxtLink to="/news">뉴스 보러 가기</NuxtLink>
  <br/>
  <NuxtLink to="/kiwoom">주식 보러 가기</NuxtLink>
</div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
</style>