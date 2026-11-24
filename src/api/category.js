import httpInstance from "@/utils/axiosInstance";

export function getCategoryAPI(id) {
  return httpInstance(
    {
      url: '/category',
      params: { id }
    }
  )
}

export function getCategoryBannerAPI(distributionSite = '1') {
  return httpInstance({
    url: '/home/banner',
    params: { distributionSite }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

