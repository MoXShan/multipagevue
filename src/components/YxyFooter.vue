<template>
  <footer id="footer" class="text-center">
    <p style="font-size:14px;margin-bottom: 15px;">&copy;2016-2017 {{copyright}}</p>
    <p style="font-size:14px;margin-top: 8px;">客服电话: * * * * * * * </p>
    <p style="font-size:14px;margin-top: 8px;">技术支持：* * * * * * *</p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        copyright: 'footer'
      }
    }
  }
</script>

<style lang="css" scoped>
  #footer {
    min-width: 1200px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #FFF;
    background-color: #475669;
  }
</style>
