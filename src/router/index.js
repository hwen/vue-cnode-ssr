import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const _import = page => () => import(`../views/${page}.vue`);

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/topics/:tab', component: _import('TopicList') },
      { path: '/', redirect: '/topics/all' },
    ],
  });
}
