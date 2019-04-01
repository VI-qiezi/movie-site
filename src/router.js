import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieNews from './views/MovieNews.vue'
import VipMovies from './views/VipMovies.vue'
import MovieComments from './views/MovieComments.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie-news',
      name: 'movie-news',
      component: MovieNews
    },
    {
      path: '/vip-movies',
      name: 'vip-movies',
      component: VipMovies
    },
    {
      path: '/movie-comments',
      name: 'movie-comments',
      component: MovieComments
    }
  ]
})
