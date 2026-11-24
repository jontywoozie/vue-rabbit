import { getHomeGoodsAPI } from '@/api/home.js';
import { onMounted, ref } from 'vue';

export function useHomeGoods() {
  const goodsProduct = ref([])
  onMounted(async () => {
    goodsProduct.value = (await getHomeGoodsAPI()).data.result
  })
  return { goodsProduct }
}
