import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie'
import cityList from '@/components/cityList'
import todayMovies from '@/components/todayMovies'
import cinema from '@/components/cinema'
import search from '@/components/search'
import searchMovie from '@/components/searchMovie'
import searchCinema from '@/components/searchCinema'
import movieDetail from '@/components/movieDetail'
import cinemaDetail from '@/components/cinemaDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/cityList',
      name: 'cityList',
      component: cityList
    },
    {
      path: '/todayMovies',
      name: 'todayMovies',
      component: todayMovies
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchMovie',
      name: 'searchMovie',
      component: searchMovie
    },
    {
      path: '/searchCinema',
      name: 'searchCinema',
      component: searchCinema
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/cinemaDetail',
      name: 'cinemaDetail',
      component: cinemaDetail
    }
  ]
})
