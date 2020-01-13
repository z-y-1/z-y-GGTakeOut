<template>
  <div id="footerContainer">
      <div :class="{active: $route.path === '/msite'}" class="guideItem" @click="goPath('/msite')">
          <i class="iconfont icon-shouye2"></i>
          <p>首页</p>
      </div>
      <div :class="{active: $route.path === '/search'}" class="guideItem" @click="goPath('/search')">
           <i class="iconfont icon-sousuo1"></i>
          <p>搜索</p>
      </div>
      <div :class="{active: $route.path === '/order'}" class="guideItem" @click="goPath('/order')">
          <i class="iconfont icon-dingdan"></i>
          <p>订单</p>
      </div>
      <div :class="{active: $route.path === '/profile'}" class="guideItem" @click="goPath('/profile')">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
      </div>
  </div>
</template>

<script>
    export default {
        methods:{
            goPath(path){
                path !== this.$route.path && this.$router.push(path)
            }
        }
    }
</script>

<style lang="stylus">
@import '../../common/sylus/mixins.styl'
    #footerContainer
        background-color white
        display flex
        top-border-1px(#eee)
        position fixed
        bottom 0
        left 0
        width 100%
        height 50px
        box-sizing border-box
        .guideItem
            width 25%
            height 50px
            text-align center
            &.active
                color $green
            .iconfont
                font-size 22px
                line-height 30px
            


</style>