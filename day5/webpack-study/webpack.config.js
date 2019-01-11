
const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的插件
// 这个插件的两个作用：
// 1、自动在内存中根据指定页面生成一个内存的页面
// 2、自动把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')


// 这个配置文件，其实就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    mode: "production", // "production" | "development" | "none"
    // 在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'), // 入口，表示要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定 输出的文件的名称
    },
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true, // 启用热更新的第一步
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块儿对象，启用热更新的第三步
        new htmlWebpackPlugin({ // 创建一个在内存中生成 html 页面的插件 
            template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module: { // 这个节点，用于配置所有的第三方模块加载器
        rules: [ // 所有三方模块的匹配规则 test: /\.css$/（与正则表达式一致） 匹配 以.css 结尾的文件 use: ['style-loader', 'css-loader'] 使用 ['style-loader', 'css-loader'] 处理
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理 .css 文件的第三方loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的第三方 loader 规则
        ]
    }
}

// 当我们在控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
// 1、首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口；
// 2、webpack 就会去项目的根目录中，查找一个 webpack.config.js 的配置文件
// 3、当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
// 4、当 webpack 拿到配置对象后，就拿到了配置对象中，指定的 入口 和 出口，然后进行打包构建；