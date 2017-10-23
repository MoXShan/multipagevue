// ##
// Common JS,Conf
import C from 'assets/conf'
import M from 'assets/common'
// import H from 'assets/http'
// import Auth from 'assets/auth'
import Refreshsh from 'assets/plugin/refresh'

// ##
// Common CSS
// http://fontawesome.io/ 图标css文件
import 'node_modules/font-awesome/css/font-awesome.css'
// element-ui 的css文件
import 'node_modules/element-ui/lib/theme-default/index.css'
// ##
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

// ##
// 自定义插件
Vue.use(Refreshsh)

// ##
export default {
  M, C
}
