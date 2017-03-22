import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import AssessmentPart1 from '@/components/Part1'
import AssessmentPart2 from '@/components/Part2'
import AssessmentPart3 from '@/components/Part3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/landing'
    },
    {
      path: '/landing',
      component: Landing,
      children: [
        {
          path: '',
          alias: 'page1',
          name: 'Assessment Page 1',
          component: AssessmentPart1
        },
        {
          path: 'page2',
          name: 'Assessment Page 2',
          component: AssessmentPart2
        },
        {
          path: 'page3',
          name: 'Assessment Page 3',
          component: AssessmentPart3
        }
      ]
    }
  ]
})
