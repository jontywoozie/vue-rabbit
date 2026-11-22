import httpInstance from "@/utils/axiosInstance";


export function getCarouselAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}
