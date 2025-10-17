<script setup lang="ts">
import dayjs from 'dayjs';
import type { Article } from '~/types/api';

interface Props {
  data: Article;
}

const props = defineProps<Props>();
const {data}=toRefs(props); //구조 분해 할당

const url = data.value.url;
const website = computed(() => {
  return url.split("https://").pop()?.split('/')[0];
})
const logo = computed(() => {
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16`
})
</script>

<template>
  <div class="card">
    <div class="card__image-box">
      <img v-if="data.urlToImage" :src="data.urlToImage" alt="" class="card__image-box__image" />
      <div v-else class="card__image-box__noData">등록된 이미지가 없습니다.</div>
    </div>
    <div class="card__info-box">
      <div class="card__info-box__header">
        <div class="broadcast">
          <img :src="logo" alt="" class="broadcast__logo"/>
          <span class="broadcast__company">{{data.source.name}}</span>
        </div>
        <span class="title">{{data.title}}</span>
      </div>
      <div class="card__info-box__body">
        <span class="contents">
          <span v-html="data.content"></span>
        </span>
      </div>
    </div>
    <div class="card__profile-box">
      <div class="card__profile-box__image-box">
        <img src="../../../assets/icons/user.svg" alt="" class="image" />
      </div>
      <div class="card__profile-box__detail">
        <span class="name">{{data.author}}</span>
        <span class="date">{{dayjs(data.publishedAt).format('YYYY년 MM월 DD일 HH시 mm분 ss초')}}</span>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use "~/assets/scss/mixin" as mixin;
@use "~/assets/scss/color" as color;

.card {
  @include mixin.flexbox(flex-start, flex-start);
  flex-direction: column;

  width: calc(360px - 48px);
  height: 440px;

  padding: 24px !important;
  gap: 20px;

  // background-color: $color-black-700; // 다크모드
  background-color: color.$color-white-000;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid color.$color-gray-000;
  border-radius: 16px;

  cursor: pointer;

  &__image-box {
    width: 100%;
    min-height: 192px;

    border-radius: 12px;

    &__image {
      width: 100%;
      height: 100%;

      border-radius: 12px;
    }
    &__noData {
      @include mixin.flex-center;

      width: 100%;
      height: 100%;

      border: 0.5px solid color.$color-gray-300;
      border-radius: 12px;
      color: color.$color-gray-350;
    }
  }
  &__info-box {
    @include mixin.flex-center;
    flex-direction: column;

    width: 100%;

    &__header {
      @include mixin.flexbox(center, flex-start);
      flex-direction: column;

      width: 100%;
      height: 88px;

      gap: 8px;

      .broadcast {
        @include mixin.flexbox(center, flex-start);
        width: 100%;

        gap: 8px;

        &__logo {
          width: 20px;
          height: 20px;

          border-radius: 50%;
          background-color: white;
        }
        &__company {
          @include mixin.flex-center;
          font-size: 12px;
          color: color.$color-black-700;
        }
      }
      .title {
        @include mixin.flexbox(center, flex-start);
        width: 100%;
        height: 48px;

        color: color.$color-black-700;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
      }
    }
    &__body {
      width: 100%;
      height: 84px;

      .contents {
        width: 100%;
        height: 100%;

        font-size: 14px;
        color: color.$color-gray-350;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
      }
    }
  }
  &__profile-box {
    @include mixin.flexbox(center, flex-start);
    width: 100%;
    height: 40px;

    gap: 8px;

    &__image-box {
      @include mixin.flex-center;

      .image {
        width: 32px;
        height: 32px;

        border-radius: 50%;
      }
    }
    &__detail {
      @include mixin.flexbox(flex-start, center);
      flex-direction: column;

      .name {
        font-size: 12px;
        color: color.$color-black-700;
      }
      .date {
        font-size: 12px;
        color: color.$color-gray-350;
      }
    }
  }
}
</style>