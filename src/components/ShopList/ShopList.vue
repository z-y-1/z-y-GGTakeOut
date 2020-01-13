<template>
  <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <div class="shop_container">
            <ul class="shop_list">
              <li class="shop_li border-1px" v-for="(shopItem,index) in shopList" :key="index">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" :src="`https://fuss10.elemecdn.com/${shopItem.image_path}`">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">{{shopItem.name}}</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports" v-for="(item,index) in shopItem.supports" :key="index">{{item.icon_name}}</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                       <Stars :rating='shopItem.rating'/>
                        <div class="rating_section">
                          {{shopItem.rating}}
                        </div>
                        <div class="order_section">
                          月售 {{shopItem.recent_order_num}} 单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥{{shopItem.float_minimum_order_amount}}起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥{{shopItem.float_delivery_fee}}</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import Stars from '../Stars/Stars'
export default {
  components:{Stars},
    mounted(){
        this.$store.dispatch('getShopListAction')
    },
    computed:{
        ...mapState({
            shopList : state => state.shopList
        })
    }
}
</script>

<style lang='stylus'>
@import "../../common/sylus/mixins.styl"
   .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            height 100%
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        /*深度选择器*/
        /deep/.swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>