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
