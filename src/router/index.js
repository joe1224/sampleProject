import Vue from 'vue'
import Router from 'vue-router'
import home from 'component/Home'
import DraRes from 'component/DraRes'
import Export2Excel from 'component/Export2Excel'
import charts from 'component/charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/draRes',
      name: 'draRes',
      component: DraRes
    },
    {
      path: '/Export2Excel',
      name: 'Export2Excel',
      component: Export2Excel
    },
    {
      path: '/charts',
      name: 'charts',
      component: charts
    },
  ]
})
