<!-- <template>
  <div class="nav">
    <a class="navItem" href="#">请先登录</a>
    <a class="navItem" href="#">帮助中心</a>
    <a class="navItem" href="#">关于我们</a>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .nav {
    color: lightgray;
    background-color: #2C2C2C;
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .navItem {
    color: lightgray;
  }

  .navItem+.navItem::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 0.8em;
    margin: 0 0.75rem;
    background-color: currentColor;
    opacity: 0.4;
  }
</style> -->
<template>
  <nav class="nav-bar">
    <div class="nav-container">
      <ul class="nav-father">
        <template v-if=true>
          <el-popconfirm class="box-item" title="确定退出吗？" confirm-button-text="确定" cancel-button-text="取消"
            cancel-button-type="warning" placement="top-end">
            <template #reference>
              <li><a href="#">退出登录</a></li>
            </template>
          </el-popconfirm>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
        </template>
        <template v-else>
          <li><a href="#">请先登录</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
  .nav-bar {
    background-color: #333;
  }

  .nav-father {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    padding-right: 8rem;
    gap: 0.5rem;
  }

  li {
    color: lightgray;
  }

  li a {
    color: inherit;
    display: inline-block;
  }

  li+li::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 0.8em;
    margin: 0 0.75rem;
    background-color: currentColor;
    opacity: 0.4;
  }
</style>
