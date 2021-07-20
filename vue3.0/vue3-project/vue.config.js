const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // 基本路径
    publicPath: './',
    // build时构建文件的目录
    outputDir: 'dist',
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: false,
    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: true,
    // Babel 显式转译列表 babel-loader 会忽略所有的node_modules中的文件，需要转译时可以一一列出
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: process.env.NODE_ENV === 'development',
    // webpack配置别名  对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
    // 该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    configureWebpack: {},
    devServer: {
        // 本地ip地址
        host: '0.0.0.0',
        port: 3000,
        open: true,
        overlay: {
            warning: false,
            error: true
        },
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: process.env.VUE_APP_BASE_API,
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
};
