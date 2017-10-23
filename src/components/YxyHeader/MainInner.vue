<template>
  <nav id="main-inner">
    <el-col :span="3" class="img-logo">
      &nbsp;
      <a href="/" class="main-title">云校管理后台</a>
    </el-col>
    <el-col :span="21">
      <el-menu mode="horizontal" class="el-menu--maininner" style="text-align: center">
        <el-menu-item index="1" v-if="permissions.indexOf('0000000') !== -1">
          <a href="/module/manage/teachingresearch/lessons/topiclessons/lessonmng.html">用户信息管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="2" v-bind:class="isActiveTeaching ? 'is-active': ''" v-if="permissions.indexOf('1000000') !== -1">
          <a href="/module/manage/teachingresearch.html">教学管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="3" v-if="permissions.indexOf('2000000') !== -1">
          <a href="/">内容管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="4" v-if="permissions.indexOf('3000000') !== -1">
          <a href="/module/manage/huodong/teacherday17.html">活动管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="5" v-if="permissions.indexOf('4000000') !== -1">
          <a href="/module/manage/operation.html">业务管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="6" v-bind:class="isActiveIncome ? 'is-active': ''" v-if="permissions.indexOf('5000000') !== -1">
          <a href="/module/manage/income.html">收入管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="7" v-if="permissions.indexOf('6000000') !== -1">
          <a href="/">平台管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="8" v-if="permissions.indexOf('7000000') !== -1">
          <a href="/">统计分析</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="9" v-if="permissions.indexOf('8000000') !== -1">
          <a href="/">反馈管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="10" v-if="permissions.indexOf('9000000') !== -1">
          <a href="/">区域管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="11" v-bind:class="isActiveAuthorize ? 'is-active': ''" v-if="permissions.indexOf('A000000') !== -1">
          <a href="/module/manage/authorize.html">权限管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="12" v-bind:class="isActiveSource ? 'is-active': ''" v-if="permissions.indexOf('A100000') !== -1">
          <a href="/module/manage/source.html">数据管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="12" v-bind:class="isActiveBaseInfo ? 'is-active': ''" v-if="permissions.indexOf('A100000') !== -1">
          <a href="/module/manage/baseinfo.html">基本信息管理</a>
          <span></span>
        </el-menu-item>
        <el-menu-item index="13" v-bind:class="isActiveContents ? 'is-active': ''">
          <a href="/module/manage/contents.html">内容管理</a>
          <span></span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </nav>
</template>

<script>
  import Lib from 'assets/Lib'
  export default {
    data () {
      return {
        pojo: {
          hasDomain: false,
          isSchool: false,
          domainName: ''
        },
        roleInfo: {},
        user: Object.assign({}, Lib.Auth.user),
        isActiveEdu1: false,
        isActiveEdu2: false,
        isActiveSch1: false,
        isActiveSch2: false,
        isActiveTea1: false,
        isActiveTea2: false,
        isActiveStu1: false,
        isActiveStu2: false,
        isActivePar1: false,
        isActivePar2: false,
        isActiveHome: false,
        isActiveOa: false,
        isActiveResource: false,
        isActiveOperation: false,
        isActiveStatistical: false,
        isActiveTeaching: false,
        isActiveAuthorize: false,
        isActiveIncome: false,
        isActiveSource: false,
        isActiveBaseInfo: false,
        isActiveContents: false,
        logo: 'http://yxcsp.91yunxiao.com/yxcsp/pull/5bac8ab9c4af1255e25a7cd738488df4.png'
      }
    },
    mounted () {
      this.isActiveEdu1 = window.location.pathname.indexOf('module/manage/edu/office') > 0
      this.isActiveEdu2 = window.location.pathname.indexOf('module/manage/edu/platform') > 0
      this.isActiveSch1 = window.location.pathname.indexOf('module/manage/sch/platform') > 0
      this.isActiveSch2 = window.location.pathname.indexOf('module/manage/sch/platform') > 0
      this.isActiveTea1 = window.location.pathname.indexOf('module/manage/tea/office') > 0
      this.isActiveTea2 = window.location.pathname.indexOf('module/manage/tea/teaching') > 0
      this.isActiveStu1 = window.location.pathname.indexOf('module/manage/stu/myclass') > 0
      this.isActiveStu2 = window.location.pathname.indexOf('module/manage/stu/mystudy') > 0
      this.isActivePar1 = window.location.pathname.indexOf('module/manage/par/office') > 0 || window.location.pathname.indexOf('module/manage/stu/myclass') > 0
      this.isActivePar2 = window.location.pathname.indexOf('module/manage/par/study') > 0 || window.location.pathname.indexOf('module/manage/stu/mystudy') > 0
      // **********
      this.isActiveOa = window.location.pathname.indexOf('module/manage/oa') > 0
      this.isActiveResource = window.location.pathname.indexOf('module/manage/resources') > 0
      this.isActiveOperation = window.location.pathname.indexOf('module/manage/operation') > 0
      this.isActiveTeaching = window.location.pathname.indexOf('module/manage/teachingresearch') > 0
      this.isActiveAuthorize = window.location.pathname.indexOf('module/manage/authorize') > 0
      this.isActiveIncome = window.location.pathname.indexOf('module/manage/income') > 0
      this.isActiveSource = window.location.pathname.indexOf('module/manage/source') > 0
      this.isActiveBaseInfo = window.location.pathname.indexOf('module/manage/baseinfo') > 0
      this.isActiveContents = window.location.pathname.indexOf('module/manage/contents') > 0
    },
    computed: {
    }
  }
</script>

<style lang="css" scoped>
  .main-title {
    color: #FFF !important;
    display: inline-block !important;
    text-align: center;
    font-size: 100%;
    font-size: 20px;
  }

  #main-inner {
    height: 90px;
    line-height: 79px;
    background: #4c9ef8;
  }

  .img-logo {
    text-align: center;
  }

  ul.el-menu {
    height: 80px;
    line-height: 80px;
  }

  li.el-menu-item {
    height: 78px;
    line-height: 78px;
    font-size: 18px;
  }

  li.el-menu-item span {
    width: 82px;
    height: 3px;
    display: block;
    background: none;
    text-align: center;
    margin: auto;
  }

  li.el-menu-item:hover span {
    background: #fff;
  }

  li.el-menu-item.is-active span {
    background: #fff;
  }

  .el-menu {
    color: #FFF;
    background: #4c9ef8
  }

  .el-menu-item {
    border-bottom: none;
    height: 40px !important;
    line-height: 40px !important;
    margin: 20px 10px 0 10px;
    padding: 0px !important;
  }

  .el-menu-item:hover {
    background: #4c9ef8 !important;
    border-bottom: none;
  }

  .el-menu-item a,
  .el-submenu__title a {
    color: #FFF !important;
    display: inline-block !important;
    text-align: center;
  }

  .el-menu-item:hover,
  .el-submenu__title:hover {
    border-color: #FFF;
    color: #FFF !important;
  }

  .el-submenu .el-menu {
    background-color: #1f2f3d
  }

  .el-submenu .el-menu .el-menu-item:hover {
    background-color: #475669
  }

  .in-wang {
    border: 1px solid #fff;
    color: #fff;
    background: #4c9ef8;
  }

  .in-wang:hover {
    border: 1px solid #fff;
    color: #4c9ef8;
    background: #fff;
  }
</style>
