import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieNews from './views/MovieNews.vue'
import VipMovies from './views/VipMovies.vue'
import MovieComments from './views/MovieComments.vue'
import Login from './views/Login.vue'
import Help from './views/footer/Help.vue'
import About from './views/footer/About.vue'
import AboutUs from './views/footer/AboutUs.vue'
import CopyRight from './views/footer/CopyRight.vue'
import ContactUs from './views/footer/ContactUs.vue'
import Link from './views/footer/Link.vue'
import New from './views/New.vue'
import Comment from './views/comments/Comment.vue'
import RelateComments from './views/comments/RelateComments.vue'
import PopularComments from './views/comments/PopularComments.vue'
import NewComments from './views/comments/NewComments.vue'
import MovieInfo from './views/MovieInfo.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
      component: MovieComments,
      children: [
        {
          path: 'popular-comments',
          name: 'popular-comments',
          component: PopularComments
        },
        {
          path: 'new-comments',
          name: 'new-comments',
          component: NewComments
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: 'aboutus',
          name: 'aboutus',
          component: AboutUs
        },
        {
          path: 'copyright',
          name: 'copyright',
          component: CopyRight
        },
        {
          path: 'contactus',
          name: 'contactus',
          component: ContactUs
        },
        {
          path: 'link',
          name: 'link',
          component: Link
        },
      ]
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/relate-comments',
      name: 'RelateComments',
      component: RelateComments
    },
    {
      path: '/movie-info',
      name: 'movie-info',
      component: MovieInfo
    }
  ]
})

export default router;
