<template>
  <div class="home-category">
    <div class="category-container">
      <ul class="category-outer">
        <li class="category-item" v-for="item in data" :key="item.id">
          <span class="category-info">
            <RouterLink><span class="main-category">{{ item.name }}</span></RouterLink>
            <RouterLink v-for="i in (item.children || []).slice(0, 2)" :key="i.id" to="/">{{ i.name }}</RouterLink>
            <i class="iconfont icon-youjiantou"></i>
          </span>
          <div class="layer">
            <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
            <ul>
              <li v-for="i in 5" :key="i">
                <RouterLink to="/">
                  <img alt="" />
                  <div class="info">
                    <p class="name ellipsis-2">
                      男士外套
                    </p>
                    <p class="desc ellipsis">男士外套，冬季必选</p>
                    <p class="price"><i>¥</i>200.00</p>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { useCategoryStore } from '@/stores/category';
  import { storeToRefs } from 'pinia';
  const categoryStore = useCategoryStore()
  const { data } = storeToRefs(categoryStore)
</script>

<style scoped lang="scss">
  .home-category {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: $bannerHeight;
    z-index: 2;
  }

  .category-outer {
    position: relative;
    width: 100%;
  }

  .main-category {
    font-size: large;
  }



  .category-item {
    width: 250px;
    background-color: rgba(0, 0, 0, 0.7);
    padding-left: 30px;
    padding-right: 5px;
    height: 55px;
    display: flex;
    align-items: center;
  }

  span {
    color: white;
  }

  .category-item:hover {
    background-color: $xtxColor;
  }

  .category-item:hover .layer {
    display: block;
  }

  .icon-youjiantou {
    color: lightgray;
    margin-left: auto;
    margin-top: 3px;
    flex-shrink: 0;
  }

  .category-info {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    gap: 12px;

    /* 主分类：不收缩，完整显示 */
    >a:first-child {
      flex-shrink: 0;
    }

    /* 子分类：不收缩、不省略，字号略小与主分类拉开层次 */
    >a:not(:first-child) {
      flex-shrink: 0;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .layer {
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    width: 990px;
    height: 495px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.7); // border: 1px solid #e4e4e4;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

    h4 {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      color: #333;

      small {
        margin-left: 10px;
        font-size: 12px;
        color: #999;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding-top: 10px;
    }

    li {
      width: calc((100% - 20px) / 3);
      border: 1px solid #eee;
      border-radius: 4px;
      transition: border-color 0.2s;

      &:hover {
        border-color: $xtxColor;
      }

      a {
        display: flex;
      }

      img {
        flex-shrink: 0;
        width: 95px;
        height: 95px;
        background-color: #f5f5f5;
      }

      .info {
        flex: 1;
        min-width: 0;
        padding: 8px 10px;
      }

      .price {
        margin-top: 4px;
        font-size: 18px;
      }
    }
  }

  .info {
    padding-left: 10px;
    line-height: 24px;
    overflow: hidden;
  }

  .name {
    font-size: 16px;
    color: #666;
  }

  .desc {
    color: #999;
  }

  .price {
    font-size: 22px;
    color: $priceColor;
  }
</style>
