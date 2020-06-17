<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" :currentIndex="currentIndex"></detail-nav-bar>
    <scroll class="content" ref="detailScroll" @onScroll="onScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavBar from '@/views/detail/childCom/DetailNavBar'
import DetailSwiper from '@/views/detail/childCom/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childCom/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childCom/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childCom/DetailGoodsInfo'
import DetailParamInfo from '@/views/detail/childCom/DetailParamInfo'
import DetailCommentInfo from '@/views/detail/childCom/DetailCommentInfo'

import GoodsList from '@/components/content/goods/GoodsList'

import Scroll from '@/components/common/scroll/Scroll'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/network/detailService'
import { debounce } from '@/common/utils'

export default {
  name: "Detail",
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll
  },
  data() {
    //这里存放数据
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      setTopYs: null,
      currentIndex: 0
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    imageLoad() {
      this.$refs.detailScroll.refresh()
      this.setTopYs()
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.detailScroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    onScroll(position) {
      // console.log(position)
      for (let i = 0; i < this.themeTopYs.length; i++)
        this.currentIndex !== i
          && (
            (i < this.themeTopYs.length - 1)
            && -position.y >= this.themeTopYs[i]
            && -position.y < this.themeTopYs[i + 1]
            && (this.currentIndex = i)
            || (-position.y >= this.themeTopYs[i]
              && (this.currentIndex = i))
          )
    }

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getDetail(this.id = this.$route.params.id)
      .then(res => {
        // console.log(res)
        this.topImages = res.result.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        //店铺信息
        this.shop = new Shop(res.result.shopInfo)

        this.detailInfo = res.result.detailInfo

        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        if (res.result.rate.cRate !== 0) {
          this.commentInfo = res.result.rate.list[0]
        }
      })

    getRecommend().then(res => {
      // console.log(res)
      this.recommends = res.data.list
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.setTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopYs)
    }, 200)
    //刷新可滚动高度
    let refresh = debounce(this.$refs.detailScroll.refresh, 200)
    //事件总线 监听子组件图片加载完成
    this.$bus.$on('detailImageFinishLoad', () => {
      refresh()
      // this.setTopYs()
      // console.log('detailImageFinishLoad')
    })
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() {

  }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() {

  }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  position: absolute;
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>