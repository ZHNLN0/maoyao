<template>
  <div class="movie">
    <v-header>
      <span class="iconfont icon-fanhui" slot="left"></span>
      <span v-show="currentMovie.movieName" slot="content">{{currentMovie.movieName}}</span>
      <span v-show="currentMovie.title" slot="content">{{currentMovie.title}}</span>
    </v-header>
    <div class="movie-content">
       <div class="movie-info">
        <div class="pic">
          <img class="img" :src="movieDetail.poster" alt="">
        </div>
        <div class="word">
          <div class="name">{{movieDetail.title}}</div>
          <div class="score">{{movieDetail.rating}}</div>
          <div class="genres">{{movieDetail.genres}}</div>
          <div class="country">{{movieDetail.country}}</div>
          <div class="runtime">{{movieDetail.runtime}}</div>
          <!-- <div class="time">{{movieDetail.release_date.substring(0, 4)}}-{{movieDetail.release_date.substring(4, 6)}}-{{movieDetail.release_date.substring(6, 8)}}大陆上映</div> -->
        </div>
      </div>
    </div>
    <div class="cinema-tip">
      上映影院
    </div>
    <v-cinema-list :cinemaList="moviePlay"></v-cinema-list>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import header from '@/components/header'
import cinemaList from '@/components/cinemaList'
import api from '@/api'
export default {

  data() {
    return {
      
      movieDetail: [],
      moviePlay: []
    }
  },
  computed: {
    ...mapGetters([
      'currentMovie',
      'currentCity'
    ])
  },
  components: {
    'v-header': header,
    'v-cinema-list': cinemaList
  },
  methods: {
    _getMovieDetail() {
      const movieId = this.currentMovie.movieId ? parseInt(this.currentMovie.movieId) : parseInt(this.currentMovie.movieid)
      const params = {
        key: 'e1feeeceb6a85d644d666e8b0948727a',
        movieid: movieId
      }
      api.movieDetail(params)
      .then(res => {
        console.log(res.data.result)
        this.movieDetail = res.data.result
      })
    },
    _getMoviePlay() {
      const movieId = this.currentMovie.movieId ? parseInt(this.currentMovie.movieId) : parseInt(this.currentMovie.movieid)
      const cityId = this.currentCity.id
      const params = {
        key: 'e1feeeceb6a85d644d666e8b0948727a',
        movieid: movieId,
        cityid: cityId
      }
      api.moviePlay(params) 
      .then(res => {
        console.log(res.data.result)
        this.moviePlay = res.data.result
      })
    }
  },
  created() {
    this._getMovieDetail()
      this._getMoviePlay()
  },
  watch: {
    currentMovie(newVal, oldVal) {
      this._getMovieDetail()
      this._getMoviePlay()
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"

.movie 
  width 100%
  .movie-content
    width 100%
    box-sizing border-box
    padding px2rem(40px) px2rem(30px)
    .movie-info 
      width 100%
      position relative
      .pic 
        display inline-block
        width px2rem(260px)
        height px2rem(350px)
        .img
          width 100%
          height 100%
      .word
        display inline-block
        position absolute
        top 0
        width px2rem(500px)
        height px2rem(350px)
        margin-left px2rem(40px)
        color #000
        .name 
          font-size 20px
          font-weight bold
        .score
          font-size 18px
          color #ffcc00
          font-weight 600
          margin-top px2rem(15px)
        .genres, .country, .runtime, .time
          font-size 12px
          margin-top px2rem(15px)

  .cinema-tip
    width 100%
    box-sizing border-box
    height px2rem(100px)
    font-size 16px
    line-height px2rem(90px)
    padding-left px2rem(40px)
    border-top 1px solid #d8d8d8
</style>
