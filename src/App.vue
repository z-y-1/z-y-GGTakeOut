<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuite/FooterGuite'

export default {
  components:{FooterGuide} 
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
