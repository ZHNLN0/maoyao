<template>
  <div class="container">
    <v-header>
      <span class="iconfont icon-fanhui" slot="left"></span>
      <span slot="content">猫眼电影</span>
    </v-header>
    <v-search :placeholder="placeholder"></v-search>
    <v-cinema-list :cinemaList="cinemaList"></v-cinema-list>
    <!-- <v-history v-show="!cinemaList" :searchHistory = "cinemaSearchHistory" @selectQuery="addQuery"></v-history> -->
  </div>
</template>

<script>
import header from '@/components/header'
import search from '@/components/search'
import cinemaList from '@/components/cinemaList'
import searchHistory from '@/components/searchHistory'
import api from '@/api'
import {mapGetters} from 'vuex'
import {debounce} from '@/common/util'
export default {
  data() {
    return {
      placeholder: '搜影院',
      cinemaList:[],
    }
  },
  methods: {
    addQuery(item) {
      console.log(item)
      this.query = item
    },
     _queryCinema() {
      const params = {
        key: '939b0b0f4edc4af863e8666a3d60949c',
        keyword: this.queryMovie,
        cityid: this.currentCity.id
      }
      api.queryCinema(params)
      .then((res) => {
        console.log(res.data)
        this.cinemaList = res.data.result.data
      })
    }
  },
  components: {
    'v-header': header,
    'v-search': search,
    'v-cinema-list': cinemaList,
    'v-history': searchHistory
  },
  computed: {
    ...mapGetters([
      'cinemaSearchHistory',
      'queryMovie',
      'currentCity'
    ])
  },
  watch: {
    queryMovie(newVal, oldVal) {
      console.log(newVal, '99999999999999999')
      debounce(this._queryCinema(), 2000)
    }
  },
}
</script>

<style>

</style>
