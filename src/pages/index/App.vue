<template>
  <div id="app" >
      <yxy-header-outer></yxy-header-outer>
        <div class='container'>
        <!--
          <el-button type="primary"  @click='test'>主要按钮</el-button>
          <div>{{num | stipe}} </div>
          <div>{{num | currency}} </div>
        -->
        <img src="/static/img/index.gif"  alt='index' />
        </div>
        <yxy-footer></yxy-footer>
  </div>
</template>
<script>
  import 'assets/Lib'
  import YxyFooter from 'components/YxyFooter'
  import YxyHeaderOuter from 'components/YxyHeaderOuter'
  export default {
    data () {
      return {
        num: 1.123450000005
      }
    },
    components: {
      YxyFooter,
      YxyHeaderOuter
    },
    mounted () {
      // 插件的调用的方法
      this.$_jwt_refresh(this, '0')
      console.info(this)
    },
    methods: {
      test () {
        this.$http.get('/api_yw/comm/weike/subject', {params: {stage: '01'}}).then(res => {
          console.info(res)
        }).catch((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
<style>
.container{
  min-height: 500px;
  text-align: center;
}
</style>
