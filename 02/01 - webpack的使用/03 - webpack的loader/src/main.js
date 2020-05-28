//1.npm init 先对项目进行初始化
//2.命令映射 package.json  scripts { 字段名：需要执行的命令}。
//例：webpack->npm run build
//build 对应的是 scripts:{"build":"webpack"}
//而且npm run 会首先执行项目里面的依赖命令  webpack 有全局与项目，cmd中运行的是全局命令
//项目webpack依赖，-dev是指开发时依赖，生前环境是不需要webpack依赖的
//cnpm install webpack@3.6.0 --save -dev

//cnpm install --save -dev css-loader

//npm install --save-dev less-loader less

const { add, mul } = require('./js/mathUtils')
import * as info from './js/info.js'
require('./css/normal.css')
require('./css/special.less')

add(2, 2)
console.log(info);
