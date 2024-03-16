import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { test } from './modules/test'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  ...test,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})
/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {})

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
  console.warn('路由错误', error.message)
})
export default router
