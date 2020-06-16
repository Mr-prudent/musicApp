<template>
  <div class="recommend">
    <!-- banner轮播图 -->
    <el-carousel :interval="5000" type="card" height="174px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img class="banner" :src="item.imageUrl" :alt="item.typeTitle">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    }
  },
  created() {
    this.$http({
      url: '/banner',
      method: 'GET',
    }).then(res => {
      const {banners} = res.data;
      this.banners = banners;
    })
  }
}
</script>

<style lang="less" scoped>
.recommend {
  .el-carousel {
    .banner {
      width: 100%;
    }
  }
}
</style>