import { getHotAPI } from '@/api/home.js'
import { onMounted, ref } from 'vue'

export function useHotGoods() {
  const hotList = ref([])
  onMounted(async () => {
    hotList.value = (await getHotAPI()).data.result
  })
  return { hotList }
}
