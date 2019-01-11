// main.js 是我们项目的JS入口文件

// 1、导入 Jquery
// import  *** from *** 是ES6 中导入模块的方式
// 由于 ES6 的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
 import $ from 'jquery'
// const $ = require('jquery')

// 使用 import 语法，导入 css 样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意：webpack 默认只能打包处理 JS 类型的文件，无法处理其他的非 JS 类型的文件
// 如果要处理非JS 类型的文件，我们需要手动安装一些合适的第三方loader加载器
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做 module，它是一个对象，在这个module对象身上，有个 rules 属性，这个 rules 属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程
// 1. 发现这个要处理的文件不是JS文件，然后就去配置文件中，查找有没有对应的第三方 loader 规则
// 2、如果能找到对应的规则，就会调用 loader 处理这种文件类型；
// 3、在调用loader的时候，是从后往前调用的
// 4、当最后的一个loader调用完毕，会把处理的结果，直接交给webpack进行打包合并，最终输出到 bundle.js 中

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})


// 经过刚才的演示，webpack 可以做什么事情？？
// 1、webpack 能够处理 JS 文件的互相依赖关系；
// 2、webpack 能够处理 JS 的兼容问题，把高级的浏览器不识别的语法，转为低级的，浏览器能正常识别的语法

// 刚才运行的命令格式：webpack 要打包的文件的路径 -o 打包好的输出文件的路径

// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目本地开发依赖
// 2. 安装完毕后，这个工具的用法，和webpack命令的用法，完全一致
// 3. 由于我们是在项目中（本地安装）安装的 webpack-dev-server，所以，无法把它当做脚本命令，在shell终端中直接运行（只能那些安装到全局 -g 的工具，才能在终端中正常执行）
// 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到实际的物理磁盘上；而是直接托管到了电脑的内存中，所以，我们在项目根目录中，根本找不到这个打包好的 bundle.js
// 6. 我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了咱们项目的根目录中，虽然我们看不到它，但是，可以认为，和 dist src node_modules 平级，有一个看不见的文件，叫做 bundle.js（为什么存放到内存？？ 速度快）
