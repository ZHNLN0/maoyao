<template>
  <div class="container">
    <div class="city">
      <div class="city-title">最近访问城市</div>
      <ul class="city-list">
        <router-link  @click.native="selectCity(item)" tag="li" to="/movie" class="item" v-for="item in citySearchHistory" :key="item.id">{{item.city_name}}</router-link>
      </ul>
    </div>
    <div class="city">
      <div class="city-title">热门城市</div>
      <ul class="city-list">
        <router-link @click.native="selectCity(item)" tag="li" to="/movie" class="item" v-for="item in hotCity" :key="item.id">{{item.city_name}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      hotCity: []
    }
  },
  computed: {
    ...mapGetters([
      'citySearchHistory'
    ])
  },
  methods: {
		...mapActions([
		'setCurrentCity',
		'setSearchCityHistory'
		]
	),
    _getHotCity() {
      const params = {
				key: 'e1feeeceb6a85d644d666e8b0948727a'
      }
      api.cityList(params)
      .then((res) => {
        console.log(res)
          this.hotCity = res.data.result
      }) 
		},
    selectCity(item) {
			console.log(item)
			this.setCurrentCity(item)
			this.setSearchCityHistory(item)	
    }
	},
	




  created() {  
    this._getHotCity()
  },
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.container
  width 100%
  .city
    width 100%
    color #333
    &-title
      background-color #eee
      height px2rem(70px)
      line-height px2rem(70px)
      font-size 14px
      padding-left px2rem(20px)
    &-list
      background-color #f5f5f5
      width 100%  
      display flex
      flex-wrap wrap
      justify-content space-around
      padding px2rem(20px) 0
      .item
        width px2rem(220px)
        height px2rem(80px)
        background-color #fff
        border 1px solid #e6e6e6
        border-radius 3px
        color #000
        line-height px2rem(80px)
        text-align center
        margin-top px2rem(20px)
</style>
