import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://v.juhe.cn/movie'
axios.defaults.headers.get['Content-Type'] = 'application/json'
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'Content-Type': 'application/json; charset=UTF-8',
//   'Access-Control-Allow-Origin': '*'
//   }
// 返回状态判断
// axios.interceptors.response.use((res) => {
//   if (res.reason !== "success") {
//     vue.$toast('网络异常')
//     vue.$hideLoading()
//     return Promise.reject(res)
//   }
//   return res
// }, (error) => {
//   vue.$toast('网络异常')
//   vue.$hideLoading()
//   return Promise.reject(error)
// })

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  todayMovies(params) {
    return fetchGet('/movies.today', params)
  },
  cityList(params) {
    return fetchGet('/citys', params)
  },
  movieDetail(params) {
    return fetchGet('/query', params)
  },
  moviePlay(params) {
    return fetchGet('/movies.cinemas',params)
  },
  aroundCinema(params) {
    return fetchGet('/cinemas.local', params)
  },
  queryMovie(params) {
    return fetchGet('/index', params)
  },
  queryCinema(params) {
    return fetchGet('/cinemas.search', params)
  },
  cinemaPlay(params) {
    return fetchGet('/cinemas.movies', params)
  }
}