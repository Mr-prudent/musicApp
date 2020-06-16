<template>
  <div class="home">
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside>
          <user-info></user-info>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import HeaderNav from 'components/HeaderNvi/HeaderNav'
import UserInfo from 'components/UserInfo/UserInfo'


export default {
  name: 'Home',
  components: {
    HeaderNav,UserInfo
  }
}
</script>

<style lang="less">
body {
  background: #242424;
.home {
  .el-container {
    .el-header {
      .el-menu.el-menu--horizontal {
        border-bottom:none;
      }
      padding: 0;
      margin-bottom: 10px;
    }

    .el-aside {
      background: #333;
      height: calc(100vh - 70px);
    }
  }
}
}

</style>
