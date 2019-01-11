// 如何在 webpack 构建的项目中，使用 Vue 进行开发
// 复习 在普通网页中如何使用过 Vue：
// 1. 使用 script 标签，引入 Vue 的包
// 2. 创建一个 id 为 app 的 div 容器
// 3. 通过 new Vue 得到一个 vm 的实例

// 在 webpack 中尝试使用 Vue:
// 注意：在 webpack 中，使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完善，只是提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式
//  import Vue from 'vue'

// 修改方式一：完整路径
// import Vue from '../node_modules/vue/dist/vue.js'
// 方式二：在webpack.config.js中
import Vue from 'vue'

// 回顾包的查找规则
// 1、查找项目根目录中有没有 node_modules 的文件夹
// 2. 在node_modules 中，根据包名，找对应的 Vue 文件夹
// 3. 在Vue 文件夹中找一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找一个 main 属性（main属性指定了这个包在被加载时候的入口文件）

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    }
})
