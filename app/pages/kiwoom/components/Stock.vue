<script setup lang="ts">
import dayjs from 'dayjs';
import type { dayBalRt } from '~/types/kiwoom/account/ka01690';

interface Props {
  data: dayBalRt;
}
const props = defineProps<Props>();
const {data}=toRefs(props); //구조 분해 할당

// function formatMoney(value) {
//   return new Intl.NumberFormat('ko-KR').format(value);
// }

const items = ref([
  [
    {
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
      onSelect() {
          alert("onSelect Event : Profile!!!");
      }
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [',']
    },
    {
      label: 'Keyboard shortcuts',
      icon: 'i-lucide-monitor'
    }
  ],
  [
    {
      label: 'Team',
      icon: 'i-lucide-users'
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail'
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square'
          }
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus'
          }
        ]
      ]
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: ['meta', 'n']
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
      to: '/docs/components/dropdown-menu'
    },
    {
      label: 'API',
      icon: 'i-lucide-cloud',
      disabled: true
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: ['shift', 'meta', 'q']
    }
  ]
])
</script>

<template>
  <div class="card">
    <div class="card__info-box">
      <div class="card__info-box__header">
        <div class="broadcast">
          <span class="broadcast__company">키움닷컴</span>
          <div>

          <UDropdownMenu :items="items">
            <UTooltip arrow text="주식 매수, 매도" :content="{side:'top', sideoffset:12}">
            <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
            </UTooltip>
          </UDropdownMenu>
          </div>
        </div>
        <span class="title">{{data.stk_nm}}[{{data.stk_cd}}]</span>
      </div>
      <div class="card__info-box__body">
        <span class="contents">
          현재가: {{formatNumber(data.cur_prc)}}원 | 보유수량: {{data.rmnd_qty}}주
        </span>
        <span class="contents">
          평가금액: {{formatNumber(data.evlt_amt)}}원 | 평가비중: {{data.evlt_wght}}%
        </span>
        <span class="contents">
          매입단가: {{formatNumber(data.buy_uv)}}원 | 매수비중: {{data.buy_wght}}%
        </span>
      </div>
    </div>
    <div class="card__profile-box">
      <div class="card__profile-box__image-box">
        <img src="../../../assets/icons/result.svg" alt="" class="image" />
      </div>
      <div class="card__profile-box__detail">
        <span class="name">{{formatNumber(data.evltv_prft)}}원</span>
        <span class="date">{{data.prft_rt}}%</span>
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
  height: 280px;

  padding: 24px !important;
  gap: 20px;

  //background-color: color.$color-black-700; // 다크모드
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
      height: 30px;

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
    height: 180px;

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