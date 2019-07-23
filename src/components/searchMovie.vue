<template>
  <div class="container">
    <v-header>
      <span class="iconfont icon-fanhui" slot="left"></span>
      <span slot="content">猫眼电影</span>
    </v-header>
    <v-search :placeholder="placeholder" @querying="querying"></v-search>
    <v-movies :todayMovies="movieLists"></v-movies>
    <v-history :searchHistory = "movieSearchHistory"  @selectQuery="addQuery"></v-history>
  </div>
</template>

<script>
import header from '@/components/header'
import search from '@/components/search'
import movies from '@/components/todayMovies'
import searchHistory from '@/components/searchHistory'
import api from '@/api'
import {debounce} from '@/common/util'
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      placeholder: '搜电影',
      movieLists: []
    }
  },
  components: {
    'v-header': header,
    'v-search': search,
    'v-movies': movies,
    'v-history': searchHistory
  },
  methods: {
    ...mapActions([
      'setMovieSearchHistory'
    ]),
    addQuery(item) {
      
      this.query = item
      console.log(this.query,'>>>>>')
    },
    querying(query) {
      console.log(query, '----------------')
    },
    _queryMovie() {
      const params = {
        key: '939b0b0f4edc4af863e8666a3d60949c',
        smode: 0,
        title: this.queryMovie
      }
      api.queryMovie(params)
      .then((res) => {
        console.log(res.data)
        this.movieLists = res.data.result
      })
    }
   
    
  },
  computed: {
    ...mapGetters([
      'movieSearchHistory',
      'queryMovie'
    ])
  },
  watch: {
    queryMovie(newVal, oldVal) {
      console.log(newVal, '99999999999999999')
      debounce(this._queryMovie(), 2000)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.container
  width 100%
  padding-bottom px2rem(200px)
</style>
