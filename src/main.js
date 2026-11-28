import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from './components/index.js'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import '@/assets/icons/iconfont.css'
import { lazyPlugin } from './directives/lazyImgPlugin.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
