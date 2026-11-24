import { getCategoryBannerAPI } from '@/api/category';
import { onMounted, ref } from 'vue';
export function useBanner() {
  const resbannerList = ref([])
  onMounted(async () => {
    resbannerList.value = (await getCategoryBannerAPI('2')).data.result
  })
  return { resbannerList }
}
