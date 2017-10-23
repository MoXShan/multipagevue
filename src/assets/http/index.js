// ##
// Common Dependency
import Vue from 'vue'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import Auth from 'assets/auth'

// ##
Vue.use(Element)
Vue.use(VueResource)
Vue.http.options.root = '/root'
Vue.http.headers.common['Authorization'] = 'Bearer YXBpOnBhc3N3b3Jk'

// ##
// 空Vue实例:用户调用公共Element-UI组件
const vue = new Vue()

// ##
// 拦截器:设置认证Header:Authorization
Vue.http.interceptors.push((request, next) => {
  // modify request
  // request.method = 'POST'
  request.headers.set('Authorization', Auth.getAuthHeader()['Authorization'])
  // no cache
  request.headers.set('If-Modified-Since', '0')
  request.headers.set('Cache-Control', 'no-cache')
  // continue to next interceptor
  next()
})

// ##
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // ##
    // 响应状态码
    var status = response.status

    // ##
    // 200 ? 否: 统一记录console.error日志
    if (status !== 200) {
      console.log('Response:-------------------1')
      console.error(response)
      console.error('Status:' + status)
      console.error('Message:' + (response.body.message || response.statusText))
      console.log('Response:-------------------2')
    }

    // ##
    // 200 ? 是
    if (status === 200) {
      // vue.$message('请求成功')
    } else if (status === 401) {
      // 认证失败: 自动退出登录
      vue.$message.error('认证失败：' + (response.body.message || response.statusText))
      // 退出登录
      Auth.logout(vue)
    } else if (status === 403) {
      // 没有权限访问: 比如: 家长访问教师的接口
      vue.$message.error('没有权限!')
    } else if (status === 422) {
      // 请求参数错误: 后台接口Assert断言抛出的异常
      vue.$message({
        message: (response.body.message || response.statusText),
        type: 'warning'
      })
    } else if (status === 504) {
      // 504 Gateway Timeout
      // 路由超时: 1.HAProxy本身路由问题(主备配置失效导致), 2.程序处理过程太长导致HAProxy路由网络请求超时
      vue.$message({
        message: (response.body.message || response.statusText),
        type: 'warning'
      })
    } else if (status === 0) {
      // 网络断开
      vue.$message.error('网络请求失败!')
    } else {
      // 其他情况异常
      // vue.$message.error((response.body.message || response.statusText))
      vue.$message({
        message: (response.body.message || response.statusText),
        type: 'warning'
      })
    }
  })
})

// ##
module.exports = Vue.http
