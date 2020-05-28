// (function () {
//     var flag = false

//     function callLi() {
//         if (!flag) {
//             console.log('lilei is a bad boy');
//         }
//     }
// })()
var moduleLILEI = (function () {
    var obj = {}
    var flag = false

    function callLi() {
        if (!flag) {
            console.log('lilei is a bad boy');
        }
    }
    obj.flag = flag
    obj.callLi = callLi
    return obj
})()

