<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UModal  v-model:open="open"
      :overlay="true"
      title="Modal with close button"
      :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  >
    <UButton label="Open" color="neutral" variant="subtle" />

    <template #body>
      <Placeholder class="h-48" />
    </template>

    <template #footer>
      <div class="flex items-center justify-center">하이루 바이루 카케루</div>
    </template>
  </UModal>
</template>

<style scoped lang="scss">

</style>