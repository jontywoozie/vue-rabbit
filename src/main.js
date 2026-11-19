import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getCotegray } from '@/api/test.js'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import '@/assets/icons/iconfont.css'

const app = createApp(App)

getCotegray().then((res) => {
  console.log(res)
})
app.use(createPinia())
app.use(router)

app.mount('#app')
