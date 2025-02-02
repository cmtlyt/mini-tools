import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/index/index.vue'),
    }, {
      path: 'mjtz',
      component: () => import('@/views/mjtz/index.vue'),
    }],
  },
];
