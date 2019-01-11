const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 所有 webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面名称
        }),
    ],
    modules: { // 配置所有第三方的loader模块
        
    },
    resolve: {
        alias: { // 修改 vue 被导入时候的包的路径
            "Vue": "vue/dist/vue.js"
        }
    }
}