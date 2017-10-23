<template>
  <div id="app" >
        <img src="../../assets/logo.png">
        <el-button>默认按钮</el-button>
        <el-button type="primary"  @click='test'>主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <div>{{num | stipe}} </div>
         <div>{{num | currency}} </div>
        <yxy-footer></yxy-footer>
  </div>
</template>
<script>
  import 'assets/Lib'
  import YxyFooter from 'components/YxyFooter'
  export default {
    data () {
      return {
        num: 1.123450000005
      }
    },
    components: {
      YxyFooter
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
