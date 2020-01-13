<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuite/FooterGuite'
import {SAVE_USER} from './store/mutations_type'
export default {
  components:{FooterGuide} ,
  async mounted(){
    let result = await this.$API.autoLogin()
    // 存入至Vuex中
    this.$store.commit(SAVE_USER, result.data)
  }
}
</script>

<style lang="stylus">
  #appContainer
      .noAdaptive
        width 750px
        height 100px
        background red
      .haveAdaptive
        width 10rem
        height 100px
        background green
</style>
