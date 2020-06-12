<!--  -->
<template>
    <div class="wrapper" ref="compScroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';
    import BScroll from 'better-scroll'

    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {},
        data() {
            //这里存放数据
            return {
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            scrollTo(x = 0, y = 0, time = 500) {
                this.scroll.scrollTo(x, y, time)
            },
            refresh() {
                console.log('refresh')                
                this.scroll.refresh()
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {
            this.scroll = new BScroll(this.$refs.compScroll, {
                //允许click事件
                click: true,
                //监听滚动条位置
                probeType: this.probeType,
                //当pullUpLoad为true时 probeType值为3
                pullUpLoad: this.pullUpLoad
            })

            this.scroll.on('scroll', (position) => {
                // console.log(position)
                this.$emit('onScroll', position)
            })

            this.scroll.on('pullingUp', () => {
                console.log('上拉加载')
                this.$emit('onPullingUp', this.scroll)
                // setTimeout(() => {
                //     this.scroll.finishPullUp()
                // }, 1000)
            })
        },
        beforeCreate() { }, //生命周期 - 创建之前
        beforeMount() { }, //生命周期 - 挂载之前
        beforeUpdate() { }, //生命周期 - 更新之前
        updated() { }, //生命周期 - 更新之后
        beforeDestroy() { }, //生命周期 - 销毁之前
        destroyed() { }, //生命周期 - 销毁完成
        activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style scoped>
    /* .wrapper {
        height: 150px;
        background-color: aquamarine;
        overflow-y: scroll;
        overflow: hidden;
    } */
</style>