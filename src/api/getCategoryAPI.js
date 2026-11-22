import httpInstance from "@/utils/axiosInstance";

export function getCategoryAPI() {
  return httpInstance(
    {
      url: '/home/category/head'
    }
  )
}
