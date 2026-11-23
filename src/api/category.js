import httpInstance from "@/utils/axiosInstance";

export function getCategoryAPI(id) {
  return httpInstance(
    {
      url: '/category',
      params: { id }
    }
  )
}
