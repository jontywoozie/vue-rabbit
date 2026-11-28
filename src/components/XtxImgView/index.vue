<script setup>
  import { ref, watch } from 'vue';
  import { useMouseInElement } from '@vueuse/core'
  const curProps = defineProps({ imageList: { type: Array, default: () => [] } })
  // 图片列表
  const imageList = curProps.imageList
  const target = ref(null)
  const { elementX, elementY, isOutside } = useMouseInElement(target)
  const curImgIndex = ref(0)
  const handleMouseEnter = (i) => {
    curImgIndex.value = i
  }
  // const curLayerLeft = computed(() => {
  //   let left
  //   if (elementX.value > 100 && elementX.value < 300) {
  //     left = elementX.value - 100
  //   } else if (elementX.value <= 100) {
  //     left = 0
  //   } else {
  //     left = 200
  //   }
  //   return left
  // })
  // const curLayerTop = computed(() => {
  //   let top
  //   if (elementY.value > 100 && elementY.value < 300) {
  //     top = elementY.value - 100
  //   } else if (elementY.value <= 100) {
  //     top = 0
  //   } else {
  //     top = 200
  //   }
  //   return top
  // })

  // const positionX = computed(() => {
  //   return -2 * curLayerLeft.value
  // })
  // const positionY = computed(() => {
  //   return -2 * curLayerTop.value
  // })
  const curLayerLeft = ref(0)
  const curLayerTop = ref(0)
  const positionX = ref(0)
  const positionY = ref(0)

  watch([elementX, elementY], () => {
    if (isOutside.value) return
    //处理跟随x
    if (elementX.value > 100 && elementX.value < 300) {
      curLayerLeft.value = elementX.value - 100
    } else if (elementX.value <= 100) {
      curLayerLeft.value = 0
    } else {
      curLayerLeft.value = 200
    }
    //处理跟随Y
    if (elementY.value > 100 && elementY.value < 300) {
      curLayerTop.value = elementY.value - 100
    } else if (elementY.value <= 100) {
      curLayerTop.value = 0
    } else {
      curLayerTop.value = 200
    }
    // 处理放大镜
    positionX.value = -2 * curLayerLeft.value
    positionY.value = -2 * curLayerTop.value
  })

</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[curImgIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" v-show="!isOutside" :style="{ left: `${curLayerLeft}px`, top: `${curLayerTop}px` }">
      </div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="handleMouseEnter(i)"
        :class="{ active: i == curImgIndex }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[curImgIndex]})`,
        backgroundPositionX: `${positionX}px`,
        backgroundPositionY: `${positionY}px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<style scoped lang="scss">
  .goods-image {
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;

    .middle {
      width: 400px;
      height: 400px;
      background: #f5f5f5;
    }

    .large {
      position: absolute;
      top: 0;
      left: 412px;
      width: 400px;
      height: 400px;
      z-index: 500;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-repeat: no-repeat;
      // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
      background-size: 800px 800px;
      background-color: #f8f8f8;
    }

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
      left: 0;
      top: 0;
      position: absolute;
    }

    .small {
      width: 80px;

      li {
        width: 68px;
        height: 68px;
        margin-left: 12px;
        margin-bottom: 15px;
        cursor: pointer;

        &:hover,
        &.active {
          border: 2px solid $xtxColor;
        }
      }
    }
  }
</style>
