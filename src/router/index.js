import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Index'}
    },
    {
      path: '/manager',
      name: 'Index',
      redirect: {name: 'Dashboard'},
      component: resolve => require(['@/view/layout/Menu'], resolve),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: resolve => require(['@/view/dashboard'], resolve)
        }, {
          path: 'category',
          name: 'CategoryList',
          component: resolve => require(['@/view/category/List'], resolve)
        }, {
          path: 'article',
          name: 'Article',
          component: resolve => require(['@/view/article/List'], resolve)
        }, {
          path: 'album',
          name: 'Album',
          component: resolve => require(['@/view/album/List'], resolve)
        }, {
          path: 'album/detail/:id',
          name: 'AlbumDetail',
          component: resolve => require(['@/view/album/Detail'], resolve)
        }, {
          path: 'album/edit/:id',
          name: 'AlbumEdit',
          component: resolve => require(['@/view/album/Add'], resolve)
        }, {
          path: 'album/add',
          name: 'AlbumAdd',
          component: resolve => require(['@/view/album/Add'], resolve)
        }, {
          path: 'about',
          name: 'About',
          component: resolve => require(['@/view/about'], resolve)
        }
      ]
    }
  ]
})
