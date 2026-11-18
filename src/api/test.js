import httpInstance from "@/utils/axiosInstance";

export function getCotegray() {
  return httpInstance(
    { url: 'home/category/head' }
  )
}


