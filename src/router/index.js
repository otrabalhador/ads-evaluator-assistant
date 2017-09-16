import Vue from 'vue'
import Router from 'vue-router'
import CommentGenerator from '@/components/CommentGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommentGenerator',
      component: CommentGenerator
    }
  ]
})
