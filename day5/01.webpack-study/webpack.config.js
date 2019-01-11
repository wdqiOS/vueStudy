// 由于 webpack 是基于 Node 进行构建的，所以，webpack 的配置文件中，任何合法的 Node 代码都是支持的
const path = require('path')
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
const htmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

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
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: { // 配置所有第三方loader模块的
        rules: [ // 第三方模块儿的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 css 文件的
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=82101&name=[hash:8]-[name].[ext]' }, // 处理图片路径的 loader （url-loader 内部依赖 file-loader）
            // limit 给定的值，是图片的大小，单位是 byte，如果我们引用的图片，大于或等于给定的limit值，则不会被转为base64格式的字符串，如果，图片小于给定的limit值，则会被转为base64的字符串
            // name: 保留图片原来的名称和格式，固定写法
            // hash: 是固定的32位 [hash:8] 截取hash的前8位
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体文件的loader
            { test: /.js$/, use: 'babel-loader', exclude: /node_modules/ } // 处理ES6 高级语法loader
        ]
    }
    
}