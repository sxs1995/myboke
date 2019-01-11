import Vue from 'vue'
import Router from 'vue-router'
import Carousel from '@/components/Carousel/Carousel'
// import Recommend from '@/components/Recommend/Recommend'
import Intro from '@/components/Intro/Intro'
import timeLine from '@/components/timeLine/timeLine'
import aboutMe from '@/components/aboutMe/aboutMe'
import blogList from '@/components/blogsList/blogsList'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Carousel',
    components: {
      default: Carousel,
      right: Intro
    }
  }, {
    path: '/home',
    name: 'Carousel',
    components: {
      default: Carousel,
      right: Intro
    }
  }, {
    path: '/timeLine',
    name: 'timeLine',
    components: {
      default: timeLine,
      right: Intro
    }
  }, {
    path: '/aboutMe',
    name: 'aboutMe',
    components: {
      default: aboutMe,
      right: Intro
    }
  }, {
    path: '/blogList',
    name: 'blogList',
    components: {
      default: blogList,
      right: Intro
    }
  }, {
    path: '/blog',
    name: 'blog',
    components: {
      default: blogList,
      right: Intro
    }
  }]
})
