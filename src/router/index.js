import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'board',
      component: require('@/components/board').default
    },
    {
        path: '/explore',
        name: 'explore',
        component: require('@/components/explore')
    },
    {
        path: '/chat',
        name: 'chat',
        component: require('@/components/chat')
    }
  ]
})
