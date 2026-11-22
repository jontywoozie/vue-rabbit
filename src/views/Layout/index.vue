<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
  import LayoutFixed from './components/LayoutFixed.vue';
  import LayoutFooter from './components/LayoutFooter.vue';
  import LayoutHeader from './components/LayoutHeader.vue';
  import LayoutNav from './components/LayoutNav.vue';
  import { onMounted } from 'vue';
  import { useCategoryStore } from '@/stores/category';
  let getCategoryStore = useCategoryStore()
  onMounted(() => {
    getCategoryStore.getCategory()
  })

</script>

<style scoped></style>
