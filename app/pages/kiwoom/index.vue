<!-- 키우증권  -->
<script setup lang="ts">
import {useKiwoomAuthStore} from '@/stores/kiwoom/token';


const store = useKiwoomAuthStore();
const {pending} = await useAsyncData("getToken", store.getToken);

</script>

<template>
  <div class="kiwoom">
    <h1>토큰 / 유형 / 만료일</h1>
    {{ store.res?.token }} // {{ store.res?.token_type }} // {{ store.res?.expires_dt }}
    <br>
    <h1>결과 코드 / 메세지</h1>
    {{ store.res?.return_code }} // {{ store.res?.return_msg }}
    <br>

    <NuxtLink to="/kiwoom/account/ka01690">주식 현황 보러 가기</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.kiwoom {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
</style>