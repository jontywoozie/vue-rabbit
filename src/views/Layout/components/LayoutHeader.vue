<template>
  <div class="header_container">
    <ul class="header_father">
      <li class="header_item">
        <img class="logoImage" src="@/assets/images/logo.png" alt="小兔鲜">
      </li>
      <li class="header_item" v-for="item in categoryStore.data" :key="item.id"><a href="#">{{ item.name }}</a>
      </li>
      <!-- <li class="header_item"><a href="#">居家</a></li> -->
      <!-- <li class="header_item"><a href="#">美食</a></li>
      <li class="header_item"><a href="#">服饰</a></li>
      <li class="header_item"><a href="#">母婴</a></li>
      <li class="header_item"><a href="#">个护</a></li>
      <li class="header_item"><a href="#">严选</a></li>
      <li class="header_item"><a href="#">数码</a></li>
      <li class="header_item"><a href="#">运动</a></li>
      <li class="header_item"><a href="#">杂项</a></li> -->
      <li class="header_item">
        <el-input v-model="input4" class="responsive-input" placeholder="Type something">
          <template #prefix>
            <el-icon class="el-input__icon">
              <ElIconSearch />
            </el-icon>
          </template>
        </el-input>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useCategoryStore } from '@/stores/category';
  const categoryStore = useCategoryStore()
</script>

<style scoped lang="scss">
  .header_container {
    background-color: #fefefe;
    font-weight: bold;
  }

  .header_father {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .header_item a {
    color: inherit;
  }

  .header_item:hover {
    color: $helpColor;
  }

  .logoImage {
    width: 10rem;
    background-color: #fefefe;
    ;
  }
</style>
<!-- <script setup>

</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/">居家</RouterLink>
        </li>
        <li>
          <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/">服饰</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div> -->
<!-- 头部购物车 -->

<!-- </div>
  </header>
</template>


<style scoped lang='scss'>
  .app-header {
    background: #fff;

    .container {
      display: flex;
      align-items: center;
    }

    .logo {
      width: 200px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
      }
    }

    .app-header-nav {
      width: 820px;
      display: flex;
      padding-left: 40px;
      position: relative;
      z-index: 998;

      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;

          &:hover {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }

        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }

    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;

      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }

      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }

    .cart {
      width: 50px;

      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;

        .icon-cart {
          font-size: 22px;
        }

        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
</style> -->
