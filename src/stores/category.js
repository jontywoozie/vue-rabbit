import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/getCategoryAPI';

export const useCategoryStore = defineStore('category', () => {
  let data = ref([])
  const getCategory = async () => {
    const res = (await getCategoryAPI()).data
    data.value = res.result
  }
  return { data, getCategory }
})
