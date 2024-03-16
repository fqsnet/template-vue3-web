import { RouteRecordRaw } from 'vue-router'

export const test: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'test',
    meta: { title: 'test' },
    component: () => import('@/views/test/index.vue')
  }
]
