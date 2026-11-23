import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getHomeCategoryAPI } from '@/api/home';

export const useCategoryStore = defineStore('category', () => {
  let data = ref([])
  const getCategory = async () => {
    const res = (await getHomeCategoryAPI()).data
    data.value = res.result
  }
  return { data, getCategory }
})
