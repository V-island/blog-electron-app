import vuescroll from 'vuescroll';

const Scroll = {}
Scroll.install = function (Vue) {
  // 你可以在这里设置全局配置
  Vue.use(vuescroll, {
    name: 'tbbScroll', // 在这里自定义组件名字，默认是vueScroll
    ops: {
      bar: {
        background: '#999',
        opacity: .6,
      }
    }, // 在这里设置全局默认配置
  })
}

export default Scroll