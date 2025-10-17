<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
router.getRoutes().forEach((item) => {console.log("getRoutes",item.path);});
</script>