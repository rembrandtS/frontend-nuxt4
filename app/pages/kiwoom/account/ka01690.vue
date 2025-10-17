<!--일별잔고수익률-->
<script setup lang="ts">
import {useKiwoomAccountStore} from '@/stores/kiwoom/account'
import StockComponent from "~/pages/kiwoom/components/Stock.vue";
import dayjs from "dayjs";

definePageMeta({
  layout: 'stocks'
})

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');


const store = useKiwoomAccountStore();
const params = {tr: "ka01690", qry_dt:`${year}${month}${day}`};
const {pending} = await useAsyncData("account", store.getData);

onMounted(() => {
  store.setParams(params);
})
</script>

<template>
  <div class="page">
    <StockComponent v-for="stock in store.res?.day_bal_rt" :key="stock.stk_cd" :data="stock" />
    <div>
      <h1>{{store.res?.dt.substring(0,4)}}년 {{store.res?.dt.substring(4,6)}}월 {{store.res?.dt.substring(6,8)}}일</h1>
      <h2>총 매입가: {{formatNumber(store.res?.tot_buy_amt)}}원</h2>
      <h2>총 평가금액: {{formatNumber(store.res?.tot_evlt_amt)}}원</h2>
      <h2>총 평가손익: {{formatNumber(store.res?.tot_evltv_prft)}}원</h2>
      <h2>총 수익률: {{store.res?.tot_prft_rt}}%</h2>
    </div>
    <div>
      <NuxtLink to="/kiwoom">주식 홈으로 돌아가기</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
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