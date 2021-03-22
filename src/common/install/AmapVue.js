import AmapVue from '@amap/amap-vue';

const Amap = {}
Amap.install = function (Vue) {
  AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
  AmapVue.config.key = '633069bb06dffee0b7a08f6c0892e6e9';
  AmapVue.config.plugins = [
    'AMap.DistrictSearch',
    'AMap.MarkerClusterer',
    'AMap.moveAnimation',
    // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
  ];
  Vue.use(AmapVue);
}

export default Amap