// vue.config.js
const path = require("path");
const IS_PROD = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  //基本路径
  publicPath: IS_PROD ? './' : './',
  //构建时的输出目录
  outputDir: process.env.outputDir,
  //放置静态资源的目录
  assetsDir: "assets",
  //  html 的输出路径
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  //用于多页配置，默认是 undefined
  pages: undefined,
  //是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: false,
  //是否为生产环境构建生成 source map？
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: "",
  //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,
  //是否使用包含运行时编译器的Vue内核版本
  runtimeCompiler: true,
  //启动项目在8080端口自动打开
  devServer: {
    open: true,
    port: 8080,
  },
  //调整内部的 webpack 配置
  configureWebpack: config => {
    if (IS_PROD) {
      config.optimization.minimizer.map((arg) => {
        const option = arg.options.terserOptions.compress;
        option.drop_console = true; // 打开开关
        return arg;
      });

      config.externals = {
        Vue: "vue",
        VueRouter: "vue-router",
        Vuex: "vuex"
      };
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@assets", resolve("./src/assets"))
      .set("@utils", resolve("./src/common/utils"));

    if (IS_PROD) {
      // 删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      // 压缩代码
      config.optimization.minimize(true);

      config.plugin('optimize-css').tap(([{ cssnanoOptions, ...args }]) => {
        const preset = cssnanoOptions.preset || [];
        preset.forEach(item => {
            if (typeof item === 'object') {
                item.calc = false;
            }
        })
        cssnanoOptions.preset = preset;
        return [{ cssnanoOptions, ...args }];
      })
    }
  },
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/variables.less')  // 引入全局样式变量
      ] 
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // extract: true,
    // 开启 CSS source maps?
    // sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false,
    // requireModuleExtension: true
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      }
    }
  }
}