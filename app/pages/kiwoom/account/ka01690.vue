<!--일별잔고수익률-->
<script setup lang="ts">
import {useKiwoomAccountStore} from '@/stores/kiwoom/account'
import StockComponent from "~/pages/kiwoom/components/Stock.vue";

const store = useKiwoomAccountStore();
const params = {tr: "ka01690", qry_dt:"20251014"};
const {pending} = await useAsyncData("account", store.getData);

onMounted(() => {
  store.setParams(params);
})

</script>

<template>
  <template>
    <div class="page">
      <StockComponent v-for="stock in store.res?.day_bal_rt" :key="stock.stk_cd" :data="stock" />
    </div>
  </template>
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