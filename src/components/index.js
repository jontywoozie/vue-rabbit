import XtxImgView from '@/components/XtxImgView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('XtxImgView', XtxImgView)
    app.component('XtxSku', XtxSku)
  }
}
