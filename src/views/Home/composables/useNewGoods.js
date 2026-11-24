import { getHomeNewAPI } from '@/api/home.js';
import { onMounted, ref } from 'vue';

export function useNewGoods() {
  const newList = ref([])
  onMounted(async () => {
    newList.value = (await getHomeNewAPI()).data.result
  })
  return { newList }
}
