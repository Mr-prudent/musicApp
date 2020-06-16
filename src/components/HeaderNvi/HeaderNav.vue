<template>
  <div class="header-navi">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#242424"
      active-text-color="#D43C33"
      text-color="#fff"
      :router="true"
    >
      <el-menu-item index="recommend">推荐</el-menu-item>
      <el-menu-item index="rank">排行榜</el-menu-item>
      <el-menu-item index="songList">歌单</el-menu-item>
      <el-menu-item index="singer">歌手</el-menu-item>
      <el-menu-item index="newSongs">最新音乐</el-menu-item>
      <el-input v-model="search_input" placeholder="专辑/歌手/歌单/用户">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "recommend",
      search_input: ""
    }
  }
}
</script>

<style lang="less">
.header-navi {
  .el-menu {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-input {     
      width: 15%;
      .el-input__inner {
        border-radius: 30px;
        height: 30px;
      }

      .el-input__inner:focus {
        border: 1px solid #D43C33;
      }

      .el-input__icon {
        line-height: 30px;
      }
    }
  }
}
</style>