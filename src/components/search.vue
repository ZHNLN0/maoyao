<template>
  <div class="content">
    <div class="search">
      <div class="search-icon">
        <span class="iconfont icon-sousuo" style="font-size: 15px" @click="setquery"></span>
      </div>
        <input class="search-input" v-model="query"  type="text"  ref="query" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {debounce} from '@/common/util'
import api from '@/api'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'queryMovie'
    ])
  },
  methods: {
    ...mapActions([
      'setQueryMovie'
    ]),
    blur () {
      this.$refs.query.blur()
    },
    setquery() {},
    _queryMovie() {
      const params = {
        key: 'e1feeeceb6a85d644d666e8b0948727a',
        smode: 0,
        title: this.query
      }
      api.queryMovie(params)
      .then((res) => {
        console.log(res.data)

      })
    }
   
  },
  created() {
    blur()
    // this.$watch('query', function(newVal, oldVal) {
    //   debounce(this.setQueryMovie(newVal), 2000)
    // })
  },
  watch: {
    query(newVal, oldVal) {
      console.log(newVal, '----------------------------------')
      debounce(this.setQueryMovie(newVal))
    } 
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.content
  width 100%
  height px2rem(110px)
  background #f5f5f5
  position relative
  .search
    width px2rem(800px)
    height px2rem(70px)
    position: absolute;
    color #777
    top 0
    right 0
    bottom 0
    left 0;
    margin auto
    border-radius 5px
    background-color #fff
    &-icon 
      display inline-block
      background-color #fff
      height px2rem(70px)
      line-height px2rem(70px)
      margin-left px2rem(10px)
    &-input 
      display inline-block
      width px2rem(600px)
      height px2rem(50px)
      outline none
      margin-left px2rem(5px)
      font-size 13px

</style>
