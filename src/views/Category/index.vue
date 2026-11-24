<script setup>
  import { getCategoryAPI, getCategoryBannerAPI } from '@/api/category';
  import { onMounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import GoodsItems from '../Home/components/GoodsItems.vue';
  let route = useRoute()
  const resCategoryObj = ref({})
  const resbannerList = ref([])
  watch(() => route.params.id, async () => {
    resCategoryObj.value = (await getCategoryAPI(route.params.id)).data.result
    console.log(resCategoryObj.value)
  }, { immediate: true })
  onMounted(async () => {
    resbannerList.value = (await getCategoryBannerAPI('2')).data.result
  })
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ resCategoryObj.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="carousel-container">
      <el-carousel :interval="5000" arrow="always" height="495px">
        <el-carousel-item v-for="item in resbannerList" :key="item.id">
          <h3 text="2xl" justify="center">
            <img :src="item.imgUrl" alt="轮播图">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 分类详情 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in resCategoryObj.children" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="ref-goods" v-for="item in resCategoryObj.children" :key="item.id">
      <div class="head">
        <h3>- {{ item.name }}-</h3>
      </div>
      <div class="body">
        <GoodsItems v-for="good in item.goods" :goods="good" :key="good.id" />
      </div>
    </div>

  </div>
</template>


<style scoped lang="scss">
  .top-category {
    h3 {
      font-size: 28px;
      color: #666;
      font-weight: normal;
      text-align: center;
      line-height: 100px;
    }

    .sub-list {
      margin-top: 20px;
      background-color: #fff;

      ul {
        display: flex;
        padding: 0 32px;
        flex-wrap: wrap;

        li {
          width: 168px;
          height: 160px;


          a {
            text-align: center;
            display: block;
            font-size: 16px;

            img {
              width: 100px;
              height: 100px;
            }

            p {
              line-height: 40px;
            }

            &:hover {
              color: $xtxColor;
            }
          }
        }
      }
    }

    .ref-goods {
      background-color: #fff;
      margin-top: 20px;
      position: relative;

      .head {
        .xtx-more {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .tag {
          text-align: center;
          color: #999;
          font-size: 20px;
          position: relative;
          top: -20px;
        }
      }

      .body {
        display: flex;
        justify-content: space-around;
        padding: 0 40px 30px;
      }
    }

    .bread-container {
      padding: 25px 0;
    }
  }

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
