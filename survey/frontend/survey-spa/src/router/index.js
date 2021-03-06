import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import NewSurvey from '@/components/NewSurvey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/surveys/:id',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/surveys',
      name: 'NewSurvey',
      component: NewSurvey
    }
  ]
})
