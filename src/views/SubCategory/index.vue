<script setup>
  import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import GoodsItems from '../Home/components/GoodsItems.vue';
  const resCategoryFilterObj = ref({})
  let route = useRoute()
  const subCategoryList = ref([])
  let data = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
  async function getSubGategory(data) {
    subCategoryList.value = (await getSubCategoryAPI(data)).data.result.items
  }
  let tabChange = (name) => {
    data.value.sortField = name
    data.value.page = 1
    getSubGategory(data.value)
  }
  onMounted(async () => {
    resCategoryFilterObj.value = (await getCategoryFilterAPI(route.params.id)).data.result
    console.log(resCategoryFilterObj.value)
    getSubGategory(data.value)
  })

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${resCategoryFilterObj.parentId}` }">{{
          resCategoryFilterObj.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ resCategoryFilterObj.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <template v-for="item in subCategoryList" :key="item.id">
          <goods-items :goods="item"></goods-items>
        </template>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
  .bread-container {
    padding: 25px 0;
    color: #666;
  }

  .sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
    }

    .goods-item {
      display: block;
      width: 220px;
      margin-right: 20px;
      padding: 20px 30px;
      text-align: center;

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }

    .pagination-container {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }


  }
</style>
