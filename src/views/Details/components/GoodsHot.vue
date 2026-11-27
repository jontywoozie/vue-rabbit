<script setup>
  import { getGoodsHotAPI } from '@/api/detail';
  import { computed, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  const props = defineProps({ type: Number })
  const route = useRoute()
  const resGoodsHotList = ref([])
  const titleMap = {
    1: '24小时热榜',
    2: '周热榜',
  }
  const getGoodsHot = async (id, type, limit = 3) => {
    const res = (await getGoodsHotAPI(id, type, limit)).data
    resGoodsHotList.value = res.result
    console.log(resGoodsHotList.value)
  }
  let hotType = computed(() => titleMap[props.type])
  onMounted(() => {

    getGoodsHot(route.params.id, props.type)
  })
</script>


<template>
  <div class="goods-hot">
    <h3>{{ hotType }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in resGoodsHotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
  .goods-hot {
    h3 {
      height: 70px;
      background: $helpColor;
      color: #fff;
      font-size: 18px;
      line-height: 70px;
      padding-left: 25px;
      margin-bottom: 10px;
      font-weight: normal;
    }

    .goods-item {
      display: block;
      padding: 20px 30px;
      text-align: center;
      background: #fff;

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
  }
</style>
