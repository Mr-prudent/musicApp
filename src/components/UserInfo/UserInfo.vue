<template>
  <div class="user_info">
    <!-- 未登录时显示 -->
    <div class="noLogin" v-if="!loginIf">
      <div class="empty_img">
        未登录
      </div>
    </div>
    <!-- 登陆时显示 -->
    <div class="login" v-else>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginIf: false
    }
  }
}
</script>

<style lang="less">
.user_info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .noLogin {
    display: flex;
    .empty_img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #cccccc;
      margin: 20px auto;
    }
  }
}
</style>