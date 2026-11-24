import { getCategoryAPI } from '@/api/category';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory() {
  let route = useRoute()
  const resCategoryObj = ref({})
  watch(() => route.params.id, async (id) => {
    resCategoryObj.value = (await getCategoryAPI(id)).data.result
  }, { immediate: true })
  return { resCategoryObj }
}

