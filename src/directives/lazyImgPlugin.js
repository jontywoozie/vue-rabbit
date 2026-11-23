import { useIntersectionObserver } from "@vueuse/core"
export const lazyPlugin = {        // ← 插件是个对象
  install(app) {                  // ← 必须有 install，拿到 app
    app.directive('lazy-img', {    // ← 注册名必须与模板 v-lazy-img 一致
      mounted(el, binding) {      // ← 指令的钩子
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
