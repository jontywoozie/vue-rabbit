import { getCarouselAPI } from '@/api/home';
import { onMounted, ref } from 'vue';

export function useCarousel() {
  const imageList = ref([])
  onMounted(async () => {
    imageList.value = (await getCarouselAPI()).data.result
  })
  return { imageList }
}
