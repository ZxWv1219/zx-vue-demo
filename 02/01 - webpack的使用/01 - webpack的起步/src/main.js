//终端打包命令 webpack ./src/main.js ./dist/bundle.js
const { add, mul } = require('./mathUtils')
import * as info from './info.js'

add(2, 2)
console.log(info);
