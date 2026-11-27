import httpInstance from "@/utils/axiosInstance";

export const getDetailAPI = (id) => {
  return httpInstance({
    url: '/goods',
    params: { id }
  })
}

export const getGoodsHotAPI = (id, type, limit = 3) => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
