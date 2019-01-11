// 项目JS入口
console.log('ok')

import './css/index.css'
import './css/index.scss'
// 注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略路径前面的 node_modules 这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认会从 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'

// json 文件里不能有注释

// class 关键字，是 ES6 中提供的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
    // 使用 static 关键字，可以定义静态属性
    // 所谓的静态属性，就是可以直接通过类名，直接方位的属性
    // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info = { name: 'zs', age: 18 }
}

// Java C# 实现面向对象的方式完全一样了，class 是从后端语言中借鉴过来的，来实现面向对象
// Person.info // 静态属性
var p1 = new Person()
// p1.name   // 实例属性

// 访问 Person 对象的静态info属性
console.log(Person.info)
// 在 webpack 中，默认只能处理一部分 ES6 语法，一些更高级的ES6语法或者 ES7 语法，webpack 是处理不了的，这时候，就需要借助于第三方的loader，来帮助webpack 处理这些高级语法，当第三方loader把高级语法转为低级的语法之后，会把结果交给 webpack 去打包到 bundle.js 中
// 通过 Babel ，可以帮我们将高级的语法转为低级语法
// 1. 在 webpack 中，可以运行如下两套命令，安装两套包，去安装 Babel 相关的loader功能；
// 1.1 第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime babel-loader@7 -D
// 1.2 第二套包: cnpm i babel-preset-env babel-preset-stage-0 -D
// 2、打开 webpack 配置文件，在 module 节点下的 rules 数组中，添加一个新的 匹配规则；
// 2.1 { test: /.js$/, use: 'babel-loader', exclude: /node_modules/ }
// 2.2 注意：在配置 babel 的loader规则的时候，必须把node_modules 目录，通过 exclude 选项排除掉：原因有两个：
// 2.2.1 如果不排除 node_modules ，则 Babel 会把 node_modules中所有的第三方 JS 文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢
// 2.2.2 哪怕，最终，Babel 把所有 node_modules 中的JS转换完毕了，但是，项目也无法正常运行
// 3. 在项目的根目录中，新建一个叫做 .babelrc 的 Babel 配置文件，这个配置文件，属于JSON格式，所以，在写.babelrs 配置的时候，必须符合JSON语法规范；不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下的配置：preset [语法]的意思
    // {
    //     "presets": ["env", "stage-0"],
    //     "plugins": ["transform-runtime"]
    // }




/* 
// ES6 以前面向对象编程的方式
// 构造函数，本质上还是一个函数
function Animal(name) {
    this.name = name
}
var a1 = new Animal('小花')
// 这是静态属性
Animal.info
// 这是实例属性
a1.info
*/
