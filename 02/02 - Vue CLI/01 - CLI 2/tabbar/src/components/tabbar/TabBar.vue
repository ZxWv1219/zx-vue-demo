<template>
    <div id='tab-bar'>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/home.svg" alt="">
            <div>首页</div>
        </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/category.svg" alt="">
            <div>分类</div>
        </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/shopcart.svg" alt="">
            <div>购物车</div>
        </div>
        <div class="tab-bar-item">
            <img src="../../assets/img/tabbar/profile.svg" alt="">
            <div>我的</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar'
    }
</script>

<style>
    #tab-bar {
        display: flex;
        background-color: #f6f6f6;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
    }
</style>