import httpInstance from "@/utils/axiosInstance";

export const getDetailAPI = (id) => {
  return httpInstance({
    url: '/goods',
    params: { id }
  })
}
