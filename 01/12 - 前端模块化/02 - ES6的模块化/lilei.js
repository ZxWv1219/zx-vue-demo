var name = '李雷'
var age = '18'
var height = '1.88'
var flag = true

function print() {
    console.log('name:' + name);
    console.log('age:' + age);
    console.log('height:' + height);
}

if (flag) {
    print()
}

// export {
//     flag, name, age, height, print
// }
//default 一个module中不允许多个
export default {
    flag, name, age, height, print
}