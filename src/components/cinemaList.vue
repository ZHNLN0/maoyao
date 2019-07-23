<template>
  <div class="cinema-list">
      <router-link to="./cinemaDetail" tag="div" @click.native="selectCinema(item)" class="cinema-item" v-for="item in cinemaList" :key="item">
        <div class="title">
          <div class="name">{{item.cinemaName}}</div> 
          <div class="price-block"><span class="price">8.8</span>元起</div>
        </div>
        <div class="address">
          <div class="adr">{{item.address}}</div>
          <div class="distance">{{distance(location.location.lat, location.location.lng, parseFloat(item.latitude), parseFloat(item.longitude)).toFixed(2)}}km</div>
        </div>
        <div class="label">
          <div class="endorse">改签</div>
          <div class="snack">小吃</div>
          <div class="vipTag">折扣卡</div>
        </div>
      </router-link>
    </div>
</template>

<script>
import { GetDistance } from '@/common/util'
import {mapGetters, mapActions} from 'vuex'
export default {
  props: {
    cinemaList: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters([
      'location'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentCinema'
    ]),
    selectCinema(item) {
      this.setCurrentCinema(item)
    },
    distance(a, b, c, d) {
      console.log(GetDistance(a, b, c, d))
      return GetDistance(a, b, c, d)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.cinema-list
    width 100%
    border-top .5px solid #d8d8d8
    background #fff
    .cinema-item 
      margin px2rem(40px) px2rem(40px)
      width px2rem(800px)
      border-bottom 1px solid #d8d8d8
      .title
        width 100%
        .name
          width px2rem(600px)
          font-size 16px
          color #000
          display inline-block
        .price-block
          display inline-block
          font-size 11px
          color #f03d37
          margin-left px2rem(30px)
          .price
            font-size 18px
      .address
        width px2rem(800px)
        margin-top px2rem(20px)
        font-size 13px
        color #666
        .adr
          width px2rem(600px)
          display inline-block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .distance
          margin-left px2rem(20px)
          display inline-block
      .label
        display flex
        width 100%
        font-size 9px
        margin-top px2rem(20px)
        margin-bottom px2rem(30px)
        .endorse
          color #589daf
          border 1px solid #589daf
          height px2rem(35px)
          line-height px2rem(35px)
          width px2rem(60px)
          text-align center
          border-radius 2px
        .snack 
          color #f90
          border 1px solid #f90
          margin-left px2rem(10px)   
          height px2rem(35px)
          line-height px2rem(35px)
          border-radius 2px 
          width px2rem(60px)
          text-align center
        .vipTag   
          color #f90
          border 1px solid #f90
          margin-left px2rem(10px)   
          height px2rem(35px)
          line-height px2rem(35px)
          border-radius 2px 
          width px2rem(90px)
          text-align center
</style>
