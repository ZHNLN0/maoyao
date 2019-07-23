<template>
    <div class="movies">
      <router-link tag="div" to="/movieDetail" @click.native="selectMovie(item)" class="item" v-for="item in todayMovies" :key="item">
        <div class="img">
          <img v-show="item.pic_url" :src="item.pic_url" class="pic" />
					<img v-show="item.poster" :src="item.poster" class="pic" />
        </div>
        <div class="content">
          <div v-show="item.movieName" class="movie-name">{{item.movieName}}</div>
					<div v-show="item.title" class="movie-name">{{item.title}}</div>
          <div class="score">观众评 9.1</div>
          <div class="actors">主演：尼古拉斯·赵四、克里斯蒂安·刘能、约翰尼·宋小宝、莱昂纳多·小沈阳</div>
          <div class="info">今天66家影院放映666场</div>
        </div>
        <div class="buy">
          购票
        </div>
      </router-link>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      
    }
	},
	props: {
		todayMovies: {
			type: Array,
			default: []
		}
	},
	methods: {
		...mapActions([
			'setCurrentMovie'
		]),
		selectMovie(item) {
			console.log(item)
			this.setCurrentMovie(item)
		}
	},
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"

.movies
	width 100%
	padding-bottom px2rem(50px)
	.item
		width 100%
		box-sizing border-box
		padding 10px 20px
		border-bottom 1px solid #ebebeb
		display flex
		// flex-wrap nowrap
		// justify-content space-between
		.img
			width px2rem(150px)
			height px2rem(210px)
			.pic
				width 100%
				height 100%
		.content
			width px2rem(500px)
			margin-left px2rem(20px)
			font-size 13px
			color #666
			.movie-name
				width 100%
				height px2rem(80px)
				line-height px2rem(80px)
				font-weight bold
				font-size 17px
				color #000
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
			.score
				margin-top px2rem(10px)
			.actors
				margin-top px2rem(10px)
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
			.info
				margin-top px2rem(10px)
		.buy
			width px2rem(100px)
			height px2rem(60px)
			line-height px2rem(60px)
			text-align center
			font-size 12px
			color #ffffff
			border-radius 4px
			background-color #f03d37
			margin-top px2rem(100px)
			margin-left px2rem(20px)
</style>
