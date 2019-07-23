<template>
  <div class="container">
    <v-header>
      <span slot="content">猫眼电影</span>
    </v-header>
    <div class="tab">
        <router-link tag="div" to="/cityList" class="city">
          <div class="city-name">{{currentCity.city_name}}</div>
          <!-- <div></div> -->
        </router-link>
        <div class="movie-select"> 
          正在热映
        </div>
        <div class="movie-select">
          即将上映
        </div>
        <router-link tag="div" to="/searchMovie" class="search">
          <span class="iconfont icon-sousuo"></span>
        </router-link>
    </div>
    <v-movies :todayMovies="todayMovies"></v-movies>
  </div>
</template>

<script>
import header from '@/components/header'
import todayMovies from '@/components/todayMovies'
import api from '@/api'
import {mapGetters, mapActions} from 'vuex'
import axios from 'axios'


export default {
  data() {
    return {
      todayMovies: []
    }
  },
  computed: {
    ...mapGetters([
      'currentCity'
    ])
  },
  components: {
    'v-header': header,
    'v-movies': todayMovies
  },
  methods: {
    ...mapActions([
      'setLocation'
    ]),
    _getTodayMovies() {
      const cityId = this.currentCity.id
      console.log(cityId)
      const params = {
        key: '939b0b0f4edc4af863e8666a3d60949c',
        cityid: cityId
      }
      api.todayMovies(params)
      .then((res) => {
        console.log(res.data.result)
          this.todayMovies = res.data.result
      }) 
    }
  },
  created() {
    console.log(123)
    this._getTodayMovies()
    axios.get('https://apis.map.qq.com/ws/location/v1/ip', {
      params: {
        key: '4FKBZ-3CDWD-JAO4U-PWDGJ-QXHYQ-2MB24'
      }
    }).then(res => {
      console.log(res)
      this.setLocation(res.data.result)
    })
  },
  watch: {
    currentCity(newVal, oldVal) {
      this._getTodayMovies()
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.container
  width 100%
  .tab
    width 100%
    height px2rem(120px)
    display flex
    flex-wrap nowrap
    justify-content space-between
    border-bottom 1px solid #d8d8d8
    .city
      width px2rem(100px)
      height px2rem(120px)
      display inline-block
      &-name 
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
    .movie-select
      width px2rem(180px)
      height px2rem(120px)
      text-align center
      font-size 15px
      font-weight bold
      line-height px2rem(120px)
      color #666
    .search
      width px2rem(100px)
      height px2rem(120px)
      line-height px2rem(120px)
      color #e54847
</style>
