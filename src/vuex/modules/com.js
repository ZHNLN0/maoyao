import api from '../../api/index'
import * as types from '../types'

const state = {
  citySearchHistory: [{
    "id":"1",
    "city_name":"上海",
    "city_pre":"S",
    "city_pinyin":"Shanghai",
    "city_short":"sh",
    "count":"316"
  },
  {
    "id":"2",
    "city_name":"北京",
    "city_pre":"B",
    "city_pinyin":"Beijing",
    "city_short":"bj",
    "count":"208"
  },
  {
    "id":"3",
    "city_name":"深圳",
    "city_pre":"S",
    "city_pinyin":"Shenzhen",
    "city_short":"sz",
    "count":"252"
  }],
  currentCity: {
    id:"1",
    city_name:"上海",
    city_pre:"S",
    city_pinyin:"Shanghai",
    city_short:"sh",
    count:"316"
  },
  currentMovie: {},
  queryMovie: '',
  movieSearchHistory: [],
  cinemaSearchHistory: [],
  location: {},
  currentCinema: {}
}

const mutations = {
  [types.SET_CURRENT_CIRT] (state, status) {
    state.currentCity = status
  },
  [types.SET_CURRENT_MOVIE] (state, status) {
    state.currentMovie = status
  },
  [types.SET_CURRENT_CINEMA] (state, status) {
    state.currentCinema = status
  },
  [types.SET_SEARCH_CITY_HISTORY] (state, status) {
    state.citySearchHistory = status
  },
  [types.SET_MOVIE_SEARCH_HISTORY] (state, status) {
    state.movieSearchHistory = status
  },
  [types.SET_QUERY_MOVIE] (state, status) {
    state.queryMovie = status
  },
  [types.SET_CINEMA_SEARCH_HISTORY] (state, status) {
    state.cinemaSearchHistory = status
  },
  [types.SET_LOCATION] (state, status) {
    state.location = status
  }
}

const actions = {
  setCurrentCity({commit}, status) {
    commit(types.SET_CURRENT_CIRT, status)
  },
  setCurrentMovie({commit}, status) {
    commit(types.SET_CURRENT_MOVIE, status)
  },
  setCurrentCinema({commit}, status) {
    commit(types.SET_CURRENT_CINEMA, status)
  },
  setSearchCityHistory({commit, state}, status) {
    let citySearchHistory = [status, ...state.citySearchHistory.slice(0,2)]
    commit(types.SET_SEARCH_CITY_HISTORY, citySearchHistory)
  },
  setQueryMovie ({commit}, status) {
    commit(types.SET_QUERY_MOVIE, status)
  },
  setMovieSearchHistory({commit}, status) {
    let movieSearchHistory = [status, ...state.movieSearchHistory.slice()]
    commit(types.SET_MOVIE_SEARCH_HISTORY, movieSearchHistory)
  },
  setCinemaSearchHistory({commit}, status) {
    let cinemaSearchHistory = [status, ...state.cinemaSearchHistory.slice()]
    commit(types.SET_CINEMA_SEARCH_HISTORY, cinemaSearchHistory)
  },
  setLocation({commit}, status) {
    commit(types.SET_LOCATION, status)
  }
}

const getters = {
  citySearchHistory: state => state.citySearchHistory,
  currentCity: state => state.currentCity,
  currentMovie: state => state.currentMovie,
  currentCinema: state => state.currentCinema,
  movieSearchHistory: state => state.movieSearchHistory,
  cinemaSearchHistory: state => state.cineamSearchHistory,
  queryMovie: state => state.queryMovie,
  location: state => state.location
}


export default {
  state,
  mutations,
  actions,
  getters
}