<script setup lang="ts">
import CardComponent from '../components/Card.vue';
import {useStore} from '~/stores/api';
import {VueSpinnerFacebook} from "vue3-spinners";

definePageMeta({
  layout: 'news'
})

const route = useRoute();
const store = useStore();
const {pending} = await useAsyncData("getNews", store.getNews);

onMounted(() => {
  store.changeSearchValue(route.params.id as string);
})
</script>

<template>
  <ClientOnly>
    <div v-if="pending" class="loading">
      <VueSpinnerFacebook size="50" color="#494949"/>
    </div>
    <div v-else class="page">
      <CardComponent v-for="article in store.articles" :key="article.url" :data="article" />
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/mixin" as mixin;

.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
.loading {
  @include mixin.flex-center;
  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
</style>