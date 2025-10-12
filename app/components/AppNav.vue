<script setup lang="ts">
  import type { Nav } from '@/types/nav';

  const route = useRoute();
  const navItems = ref<Nav[]>([
    {idx:1, label: '일반시사', value:'General', path:"general", clicked:false},
    {idx:2, label: '비즈니스', value:'Business', path:"business", clicked:false},
    {idx:3, label: '엔터테인먼트', value:'Entertainment', path:"entertainment", clicked:false},
    {idx:4, label: '건강', value:'Health', path:"health", clicked:false},
    {idx:5, label: '과학', value:'Science', path:"science", clicked:false},
    {idx:6, label: '스포츠', value:'Sports', path:"sports", clicked:false},
    {idx:7, label: '테크롤리지', value:'Technology', path:"technology", clicked:false},
  ]);

  // 변경된 페이지 라우터 감지해서 네비게이션 UI를 동적 변경
  watch(()=> route.path, () => {
    navItems.value.forEach((item) => {
      item.clicked = route.params.id === item.path;
    })
  }
  , { immediate: true });
</script>

<template>
  <nav class="nav">
    <div class="nav__list">
      <NuxtLink  v-for="item in navItems" :to="item.path" :key="item.idx" class="nav__list__item" :class="{ 'active': item.clicked }">{{ item.label }}</NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_mixin.scss" as mixin;
@use "@/assets/scss/_color.scss" as color;

.nav{
  @include mixin.flex-center;

  width: 100%;
  margin-top: 88px;

  &__list {
    @include mixin.flex-center;
    list-style: none;
    width: 100%;
    gap: 24px;

    &__item {
      @include mixin.flex-center;

      padding: 12px 24px;
      background-color: color.$color-gray-200;
      border-radius: 20px;
      text-decoration: none;
      color: color.$color-gray-700;

      cursor: pointer;

      &.active {
        background-color: #494949;
        color: color.$color-white-000;
      }
    }
  }
}
</style>