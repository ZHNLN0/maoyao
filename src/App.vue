<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-tab></v-tab>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-tab': tab
  }
}
</script>

<style lang="stylus" scoped>
@import "./assets/css/function"

html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff

</style>
