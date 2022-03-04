import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/HelloWorld",
    component: () => import('@components/HelloWorld.vue')
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('@components/HelloWorld.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@components/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router