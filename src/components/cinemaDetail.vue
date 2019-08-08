<template>
  <div class="cinema">
    <v-header>
      <span class="iconfont icon-fanhui" slot="left"></span>
      <span slot="content">猫眼电影</span>
    </v-header>
    <div class="cinema-info">
        <div class="name">{{result.cinema_info.name}}</div>
        <div class="address">{{result.cinema_info.address}}</div>
        <div class="telephone">{{result.cinema_info.telephone}}</div>
    </div>
		<div class="cinema-movies">
			<div class="swiper">
				<swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="test">
					<swiper-slide v-for="(item, index) in result.lists" ref="slide" :key="index" :class="index !== active ? 't1' : '' ">
						<div class="pic" >
							<img class="iii" :src="item.pic_url" alt="" />
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="movie-name">
				{{result.lists[active].movieName}}
			</div>
			<div class="play-lists">
				<div class="play-item" v-for="(item, index) in result.lists[active].broadcast" :key="index">
					<div class="time">{{item.time}}</div>
					<div class="hall">
						<div>
							英语3D
						</div>
						<div>
							{{item.hall}}
						</div>
					</div>
					<div class="price">￥<span class="number">{{item.price}}</span></div>
					<div class="buy">购票</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import header from '@/components/header'
import {mapGetters} from 'vuex'
import api from '@/api'

export default {
  data() {
    return {
      result: {
        "cinema_info": {
            "id": "1188",
            "name": "橙天嘉禾苏州影城",
            "city": "苏州",
            "telephone": "0512-69566540",
            "address": "苏州工业园区现代大道1699号 印象城三层"
        },
        "lists": [
            {
                "movieId": "151951",
                "movieName": "美国队长2",
                "pic_url": "http://img31.mtime.cn/mt/2014/03/16/154554.36400206_96X128.jpg",
                "broadcast": [
                    {
                        "hall": "7号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709956/",
                        "time": "11:20"
                    },
                    {
                        "hall": "1号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709930/",
                        "time": "12:10"
                    },
                    {
                        "hall": "3号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709938/",
                        "time": "13:00"
                    },
                    {
                        "hall": "5号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709947/",
                        "time": "13:40"
                    },
                    {
                        "hall": "1号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709931/",
                        "time": "14:40"
                    },
                    {
                        "hall": "3号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709939/",
                        "time": "15:30"
                    },
                    {
                        "hall": "5号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709948/",
                        "time": "16:30"
                    },
                    {
                        "hall": "3号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709940/",
                        "time": "18:00"
                    },
                    {
                        "hall": "5号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709949/",
                        "time": "19:10"
                    },
                    {
                        "hall": "1号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709932/",
                        "time": "19:50"
                    },
                    {
                        "hall": "3号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709941/",
                        "time": "20:30"
                    },
                    {
                        "hall": "9号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709966/",
                        "time": "21:10"
                    },
                    {
                        "hall": "1号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709933/",
                        "time": "22:20"
                    }
                ]
            },
            {
                "movieId": "172743",
                "movieName": "魔警",
                "pic_url": "http://img31.mtime.cn/mt/2014/04/09/085413.72005937_96X128.jpg",
                "broadcast": [
                    {
                        "hall": "9号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709967/",
                        "time": "10:50"
                    },
                    {
                        "hall": "8号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709962/",
                        "time": "13:15"
                    },
                    {
                        "hall": "9号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709968/",
                        "time": "14:15"
                    },
                    {
                        "hall": "8号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709963/",
                        "time": "15:20"
                    },
                    {
                        "hall": "9号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709969/",
                        "time": "16:40"
                    },
                    {
                        "hall": "8号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709964/",
                        "time": "17:50"
                    },
                    {
                        "hall": "9号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709970/",
                        "time": "19:00"
                    },
                    {
                        "hall": "2号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709934/",
                        "time": "20:50"
                    },
                    {
                        "hall": "5号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709950/",
                        "time": "21:40"
                    },
                    {
                        "hall": "7号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709957/",
                        "time": "22:30"
                    }
                ]
            },
            {
                "movieId": "177879",
                "movieName": "里约大冒险2",
                "pic_url": "http://img31.mtime.cn/mt/2014/03/20/091804.71943568_96X128.jpg",
                "broadcast": [
                    {
                        "hall": "4号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709942/",
                        "time": "11:10"
                    },
                    {
                        "hall": "4号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709943/",
                        "time": "14:30"
                    },
                    {
                        "hall": "6号厅",
                        "price": "120",
                        "ticket_url": "",
                        "time": "15:00"
                    },
                    {
                        "hall": "4号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709944/",
                        "time": "16:50"
                    },
                    {
                        "hall": "7号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709958/",
                        "time": "18:10"
                    },
                    {
                        "hall": "6号厅",
                        "price": "120",
                        "ticket_url": "",
                        "time": "19:20"
                    },
                    {
                        "hall": "7号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709959/",
                        "time": "20:20"
                    },
                    {
                        "hall": "6号厅",
                        "price": "120",
                        "ticket_url": "",
                        "time": "21:20"
                    }
                ]
            },
            {
                "movieId": "190465",
                "movieName": "超验骇客",
                "pic_url": "http://img31.mtime.cn/mt/2014/03/07/165346.19559684_96X128.jpg",
                "broadcast": [
                    {
                        "hall": "6号厅",
                        "price": "120",
                        "ticket_url": "",
                        "time": "12:10"
                    },
                    {
                        "hall": "2号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709935/",
                        "time": "13:10"
                    },
                    {
                        "hall": "2号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709936/",
                        "time": "15:40"
                    },
                    {
                        "hall": "6号厅",
                        "price": "120",
                        "ticket_url": "",
                        "time": "17:10"
                    },
                    {
                        "hall": "2号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709937/",
                        "time": "18:30"
                    },
                    {
                        "hall": "4号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709945/",
                        "time": "19:30"
                    },
                    {
                        "hall": "8号厅",
                        "price": "63",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709965/",
                        "time": "20:10"
                    },
                    {
                        "hall": "4号厅",
                        "price": "93",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709946/",
                        "time": "21:45"
                    }
                ]
            },
            {
                "movieId": "209220",
                "movieName": "最佳嫌疑人",
                "pic_url": "http://img31.mtime.cn/mt/2014/04/14/142239.57219598_96X128.jpg",
                "broadcast": [
                    {
                        "hall": "7号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709960/",
                        "time": "13:55"
                    },
                    {
                        "hall": "7号厅",
                        "price": "43",
                        "ticket_url": "http://piao.mtime.com/onlineticket/showtime/79709961/",
                        "time": "16:00"
                    }
                ]
            }
        ]
    	},
    	swiperOption:{
        spaceBetween: 10,
        loop:false,
        speed:600, 
        slidesPerView : 3,
				centeredSlides : true,
				autoHeight: true,
				height: 300
			},
			active: 0,
			broadcast: []
		}
	},
	computed: {
		...mapGetters([
			'currentCinema'
		])
	},
  components: {
    'v-header': header,
    swiper,
    swiperSlide
	},
	methods: {
		_getCinemaPlay() {
			const cinemaId = this.currentCinema.id ? parseInt(this.currentCinema.id) : parseInt(this.currentCinema.cinemaId)
			const params = {
				key: 'e1feeeceb6a85d644d666e8b0948727a',
				cinemaid: cinemaId
			}
			api.cinemaPlay(params)
			.then((res) => {
				console.log(res.data.result)
				this.result = res.data.result
			})
		},
	   test() {
			this.active = this.$refs.mySwiper.swiper.activeIndex
			let h = this.$refs.slide[this.active]
			console.log(h)
		 }
	},
	mounted() {
		this._getCinemaPlay()
	},
	watch: {
		location(newVal, oldVal) {
			this._getCinemaPlay()
		}
	},
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"

.cinema 
  width 100%
  .cinema-info
    width 100%
    box-sizing border-box
    padding px2rem(40px) px2rem(30px)
    border-bottom 1px solid #d8d8d8
    .name 
      font-size 17px
      font-weight bold
      color #333
      line-height 2
    .address, .telephone
      font-size 13px
      color #999
      line-height 1.5
	.cinema-movies
		margin-top px2rem(20px)
		.swiper
			margin-bottom px2rem(20px)
			border-bottom 1px solid #d8d8d8
			height px2rem(350px)
			.pic 
				width px2rem(180px)
				height px2rem(260px)
				.iii
					width 100%
					height 100%
			.t1
				transition all .5s
				transform scale(0.8)
		.movie-name 
			text-align center
			height px2rem(50px)
			line-height px2rem(50px)
			font-size 17px
			color #333
			font-weight bold
	.play-lists
		width 100%
		.play-item
			width 100%
			height px2rem(100px)
			display flex
			flex-wrap nowrap
			justify-content space-around
			align-items center
			border-bottom 1px solid #d8d8d8
			padding  px2rem(20px) 0
			.time
				font-size 20px
				color #333
			.hall
				div:nth-child(1)
					font-size 13px
					color #333
					line-height 2
				div:nth-child(2)
					font-size 11px
					color #999
			.price
				font-size 11px
				color #f03d37
				.number
					font-size 19px
			.buy
				width px2rem(105px)
				height px2rem(62px)
				background-color #f03d37
				font-size 12px
				color #fff
				text-align center
				line-height px2rem(62px)
				border-radius 4px
</style>
