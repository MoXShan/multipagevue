<template>
  <div class="yxy-header-inner">
    <top-inner></top-inner>
    <main-inner></main-inner>
  </div>
</template>

<script>``
  import TopInner from './YxyHeader/TopInner'
  import MainInner from './YxyHeader/MainInner'
  import Lib from 'assets/Lib'
  export default {
    components: {
      TopInner,
      MainInner
    },
    created () {
      // 未登录跳转登录页面
      if (!Lib.Auth.checkAuth()) {
        window.location.href = '/module/auth/login.html'
        return
      }
      Lib.Auth.currentUser(this)
    }
  }
</script>

<style lang="css">
</style>
