<script setup>
  import HomeCategory from './components/HomeCategory.vue'
  import HomeCarousel from './components/HomeCarousel.vue';
  import HomeNewGoods from './components/HomeNewGoods.vue';
  import HomeWelcomeGoods from './components/HomeWelcomeGoods.vue';
  import HomeProductList from './components/HomeProductList.vue';
  import HomePanel from './components/HomePanel.vue';
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeCarousel />
  </div>
  <HomeNewGoods />
  <HomeWelcomeGoods />
  <HomeProductList />
  <HomePanel title="吃我一招" subTitle="真好吃汪汪汪汪"></HomePanel>
</template>

<style scoped lang="scss">
  .container {
    position: relative;
  }
</style>
