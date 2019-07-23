<template>
  <div class="tab" >
      <li style="display: inline-block" v-for="(item, index) in tab" :key="index" @click="selectTabs(index)" :class="{'cur' : curIdx==index}">
        <router-link tag="div" class="tab-item" :to="item.to" >
          <div class="icon-wrapper">
            <span :class="item.icon" class="iconfont"></span>
          </div>
          <span class="tab-link">{{item.name}}</span>
        </router-link>
      </li> 
  </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      curIdx: 0,
      tab: [
        {icon: "icon-dianying",name: "电影", to: "/movie"},
        {icon: "icon-yingyuana",name: "影院", to: "/cinema"},
        {icon: "icon-wode",name: "我的", to: "/user"}
      ]
    }
  },
  methods: {
    selectTabs(index){
      this.curIdx=index;
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.tab
  position fixed
  bottom 0
  width 100%
  background #fff
  border-top .5px solid #d8d8d8
  display -webkit-box
  display flex
  justify-content space-around
  padding-bottom env(safe-area-inset-bottom)
  &-item
    float left
    height 50px
    line-height 1
    box-sizing border-box
    position relative
    text-align center
    -webkit-box-flex 1
    flex 1 
    .icon-wrapper
      margin-top 5px
    .tab-link
      margin-top 5px
      font-size 10px

.cur
  color #f03d37
</style>
