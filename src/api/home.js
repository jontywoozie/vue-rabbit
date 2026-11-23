import httpInstance from "@/utils/axiosInstance";


export function getCarouselAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}

export function getHomeNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getHomeGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}

export function getHomeCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}
