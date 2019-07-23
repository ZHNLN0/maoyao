<template>
  <div class="history" v-show="searchHistory.length">
    <div class="history-item" 
      v-for="(item, index) in searchHistory" 
      :key="index" 
      @click="selectItem(item)">
      <span class="icon icon-lishi" style="font-size: 20px"></span>
      <span class="item-name">{{item}}</span>
      <span class="item-right" @click.stop="deleteOne(item)">X</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    searchHistory: {
      type: Array,
      default: []
    }
  },
  methods: {
    ...mapActions([
      'setQuery',
    ]),
    selectItem (item) {
      // console.log(item)
      this.$emit('selectQuery', item)
    },
    deleteOne(item) {
      var i = this.searchHistory.indexOf(item)
      this.searchHistory.splice(i, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.history
  width 100%
  background-color #fff
  &-item
    width px2rem(800px)
    height px2rem(100px)
    margin 0 auto
    border-bottom 1px solid #e5e5e5
    line-height px2rem(100px)
    color #777
    .item-name
      display inline-block
      font-size 15px
      width px2rem(650px)
      margin-left px2rem(30px)
      color #000
    .item-right
      display inline-block
      margin-left px2rem(10px)
      
</style>
