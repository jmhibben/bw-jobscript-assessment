import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import AssessmentPart1 from '@/components/Part1'
import AssessmentPart2 from '@/components/Part2'
import AssessmentPart3 from '@/components/Part3'
import AssessmentPart4 from '@/components/Part4'
import AssessmentPart5 from '@/components/Part5'
import AssessmentPart6 from '@/components/Part6'
import AssessmentPart7 from '@/components/Part7'
import AssessmentPart8 from '@/components/Part8'
import AssessmentComplete from '@/components/Done'

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
        },
        {
          path: 'page4',
          name: 'Assessment Page 4',
          component: AssessmentPart4
        },
        {
          path: 'page5',
          name: 'Assessment Page 5',
          component: AssessmentPart5
        },
        {
          path: 'page6',
          name: 'Assessment Page 6',
          component: AssessmentPart6
        },
        {
          path: 'page7',
          name: 'Assessment Page 7',
          component: AssessmentPart7
        },
        {
          path: 'page8',
          name: 'Assessment Page 8',
          component: AssessmentPart8
        },
        {
          path: 'done',
          name: 'Assessment Complete',
          component: AssessmentComplete
        }
      ]
    }
  ]
})
