<!--  -->
<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物车</div>
        </nav-bar>
        <scroll class="content" ref='homeScroll'>
            <home-swiper :banners='banners'></home-swiper>
            <recommend-view :recommends='recommends'></recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick='tabClick'></tab-control>
            <goods-list :goods="goodsItem"></goods-list>
        </scroll>
        <!-- 监听组件的原生事件时,必需加上.native修饰符 -->
        <back-top @click.native='backClick'></back-top>
    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';
    //common
    import Scroll from '@/components/common/scroll/Scroll'
    import NavBar from '@/components/common/navbar/NavBar'
    import TabControl from '@/components/content/tabControl/TabControl'
    import GoodsList from '@/components/content/goods/GoodsList'
    import BackTop from '@/components/content/backTop/BackTop'
    //child
    import HomeSwiper from '@/views/home/childComponents/HomeSwiper'
    import RecommendView from '@/views/home/childComponents/RecommendView'
    import FeatureView from '@/views/home/childComponents/FeatureView'
    //service
    import {
        getHomeMultidata,
        getHomeGoods
    } from '@/network/homeService'

    const map = new Map([
        [0, 'pop'],
        [1, 'new'],
        [2, 'sell']
    ])

    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            Scroll,
            NavBar,
            TabControl,
            GoodsList,
            BackTop,
            HomeSwiper,
            RecommendView,
            FeatureView
        },
        data() {
            //这里存放数据
            return {
                banners: [],
                recommends: [],
                // goods: new Map([
                //     ['pop', { page: 0, list: [] }],
                //     ['news', { page: 0, list: [] }],
                //     ['sell', { page: 0, list: [] }]
                // ])
                goods: {
                    'pop': { page: 0, list: [] },
                    'new': { page: 0, list: [] },
                    'sell': { page: 0, list: [] }
                },
                currentType: 'pop'
            }
        },
        //监听属性 类似于data概念
        computed: {
            goodsItem() {
                return this.goods[this.currentType].list
            }
        },
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            /**
             * 事件
             */
            tabClick(index) {
                this.currentType = map.get(index)
            },
            backClick() {
                // console.log('backClick')
                this.$refs.homeScroll.scroll
            },
            /**
             * 接口方法
             */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    console.log(res)
                    this.banners = res.data.banner.list
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoods(type) {

                // let good = this.goods.get(type) //map 
                let good = this.goods[type]
                let page = good.page + 1
                //商品数据
                getHomeGoods(type, page).then(res => {
                    console.log(res)
                    good.list.push(...res.data.list)
                    // good.list.concat(res.data.list)
                    good.page = page
                })
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            this.getHomeMultidata()
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

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
    #home {
        /* padding-top: 44px; */
        /* 100 viewport height */
        height: 100vh;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #ffffff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;

        z-index: 9;
    }

    .tab-control {
        /* position: sticky; */
        top: 44px;

        z-index: 9;
    }

    .content {
        height: calc(100% - 93px);
        margin-top: 44px;
        overflow: hidden;
    }
</style>