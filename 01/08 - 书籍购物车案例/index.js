const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: '1',
                name: '《唐诗三百首》',
                date: '2010-01-01',
                price: 50.50,
                count: 1

            }, {
                id: '2',
                name: '《时间之舞》',
                date: '2011-01-01',
                price: 67.00,
                count: 1

            }, {
                id: '3',
                name: '《余下只有噪音》',
                date: '1999-05-22',
                price: 99.50,
                count: 1

            }, {
                id: '4',
                name: '《你当像鸟飞往你的山》',
                date: '2019-05-22',
                price: 199.50,
                count: 1

            }
        ]
    }, computed: {
        totalPrice() {
            return this.books.reduce((preValue, currentValue) => {
                return preValue + currentValue.price * currentValue.count
            }, 0)
        }
    }, methods: {
        btnAdd(index) {
            this.books[index].count += 1
            this.books.splice(index, 1, this.books[index])
        },
        btnSubtract(index) {
            if (this.books[index].count == 0) return
            this.books[index].count -= 1
            this.books.splice(index, 1, this.books[index])
        },
        btnRemove(index) {
            this.books.splice(index, 1)
        },
        getPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }, filters: { //过滤器 
        finalPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
    //map  作用数据处理，返回数组,回调函数返回 单个元素
    //filter 作用筛选数据，返回数组，回调函数返回 一个boolean值
    //reduce 汇总
})