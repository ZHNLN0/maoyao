<template>
  <div class="container">
    <v-header>
      <span slot="content">猫眼电影</span>
    </v-header>
    <div class="search">
      <div class="city">
        {{location.ad_info.city.substring(0, 2)}}
      </div>
      <router-link tag="div" to="/searchCinema" class="search-content">
        <span class="icon icon-sousuo" style="font-size: 13px"></span>
        <span>搜影院</span>
      </router-link>
    </div>
    <v-cinema-list :cinemaList="cinemaList"></v-cinema-list>
  </div>
</template>

<script>
import header from '@/components/header'
import cinemaList from '@/components/cinemaList'
import {mapActions, mapGetters} from 'vuex'
import api from '@/api'

export default {
 
  data() {
    return {
      cinemaList:[]
    }
  },
  computed: {
    ...mapGetters([
      'location'
    ])
  },
  components: {
    'v-header': header,
    'v-cinema-list': cinemaList
  },
  methods: {
    _getAroundCinema () {
      const params = {
        key: '939b0b0f4edc4af863e8666a3d60949c',
        lat: this.location.location.lat.toString(),
        lon: this.location.location.lng.toString(),
        radius: 3000
      }
      api.aroundCinema(params) 
      .then((res) => {
        console.log(res)
        this.cinemaList = res.data.result
      })
    }
  },
  created() {
    this._getAroundCinema()
  },
  watch: {
    location(newVal, oldVal) {
      this._getAroundCinema()
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.container
  width 100%
  .search
    width 100%
    background-color #f5f5f5
    .city
      display inline-block
      width px2rem(100px)
      height px2rem(80px)
      margin-left px2rem(20px)
      height px2rem(120px)
      line-height px2rem(120px)
      color #666
      font-size 15px
      text-align center
      &:after
        display inline-block
        content ''
        width 0
        height 0
        border 5px solid transparent
        border-top 5px solid #666
        position absolute
        margin-left 5px
        margin-top px2rem(59px)
    &-content
      display inline-block
      background-color #fff
      width px2rem(650px)
      height px2rem(60px)
      font-size 13px
      line-height px2rem(60px)
      text-align center
      margin-left px2rem(40px)
      border-radius 5px
      color #b2b2b2
  
</style>
