<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="detailScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
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

import Scroll from '@/components/common/scroll/Scroll'

import { getDetail, Goods, Shop } from '@/network/detailService'

export default {
  name: "Detail",
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
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
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    getDetail(this.id = this.$route.params.id)
      .then(res => {
        console.log(res)
        this.topImages = res.result.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        //店铺信息
        this.shop = new Shop(res.result.shopInfo)

        this.detailInfo = res.result.detailInfo
      })
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