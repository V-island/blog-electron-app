// import Vuex from "vuex";
import VueRouter from "vue-router";

// 设置其他框架/组件
import installAntDesignVue from "./install/AntDesignVue";
// import installAmapVue from "./install/AmapVue";
// import installScrollVue from "./install/ScrollVue";
// import installSignaturePad from "./install/SignaturePadVue";
// import installVideoJsVue from "./install/VideoJsVue";
// import installHolderJsVue from "./install/HolderJsVue";

// 引入第三方样式
// import 'font-awesome/css/font-awesome.css';
// import 'viewerjs/dist/viewer.css'
// import 'augmented-ui/augmented-ui.min.css'

// 引入第三方样式
// import 'font-awesome/css/font-awesome.css';
// import 'viewerjs/dist/viewer.css'
// import 'augmented-ui/augmented-ui.min.css'

// 引入第三方组件
// import Viewer from 'v-viewer'

const Common = {}
Common.install = function (Vue) {
  // 注册Vue基础组件
  // Vue.use(Vuex);
  Vue.use(VueRouter);

  // 注册ant-design-vue
  Vue.use(installAntDesignVue);
  
  // 注册AMap-Vue
  // Vue.use(installAmapVue);

  // 注册Signature-Pad-Vue
  // Vue.use(installSignaturePad);

  // 注册Video-Js-Vue
  // Vue.use(installVideoJsVue);

  // 注册Holder-Js-Vue
  // Vue.use(installHolderJsVue);

  // 注册Scroll-Vue
  // Vue.use(installScrollVue);

  // 注册第三方组件
  // Vue.use(Viewer);
}
export default Common
