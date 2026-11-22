<template>
  <div class="carousel-container">
    <el-carousel :interval="5000" arrow="always" height="495px">
      <el-carousel-item v-for="item in imageList" :key="item.id">
        <h3 text="2xl" justify="center">
          <img :src="item.imgUrl" alt="轮播图">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
  import { getCarouselAPI } from '@/api/home';
  import { onMounted, ref } from 'vue';

  let imageList = ref([])
  onMounted(async () => {
    imageList.value = await (await getCarouselAPI()).data.result
    console.log(imageList.value)
  })

</script>

<style scoped lang="scss">
  .carousel-container {
    width: 100%;

    // 轮播图作为底层，留在正常文档流，撑起父容器 .container 的高度
    :deep(.el-carousel) {
      height: $bannerHeight;
    }

    img {
      width: 100%;
      height: 495px;
    }
  }
</style>
