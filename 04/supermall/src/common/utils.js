export
    /**
    * 防抖函数
    * @param func 需要执行的函数
    * @param delay 需要等待的时间(ms)
    */
    function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}