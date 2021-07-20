import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import( '../views/Home.vue'),
        meta: {
          icon:'el-icon-s-home',
          title:'首页',
        }
      },
      {
        path: '/setup',
        name: 'Setup',
        component: () => import( '../views/Setup.vue'),
        meta: {
          icon:'el-icon-cloudy',
          title:'setup函数',
        }
      },
      {
        path: '/response',
        name: 'Response',
        component: () => import( '../views/response'),
        meta: {
          icon:'el-icon-sunny',
          title:'响应式API',
        },
        children:[
          {
            path: '/response/ref',
            name: 'ref',
            component: () => import( '../views/response/ref.vue'),
            meta: {
              title:'ref 基础类型',
            }
          },
          {
            path: '/response/reactive',
            name: 'reactive',
            component: () => import( '../views/response/reactive.vue'),
            meta: {
              title:'reactive 复杂类型',
            }
          },
          {
            path: '/response/watch',
            name: 'watch',
            component: () => import( '../views/response/watch.vue'),
            meta: {
              title:'watch 监听',
            }
          },
          {
            path: '/response/computed',
            name: 'computed',
            component: () => import( '../views/response/computed.vue'),
            meta: {
              title:'computed 计算属性',
            }
          },
        ]
      },
      {
        path: '/built-inComp',
        name: 'built-inComp',
        component: () => import( '../views/built-inComp'),
        meta: {
          icon:'el-icon-cloudy',
          title:'内置组件',
        },
        children:[
          {
            path: '/built-inComp/slot',
            name: 'slot',
            component: () => import( '../views/built-inComp/slot.vue'),
            meta: {
              title:'slot 插槽',
            }
          },
          {
            path: '/built-inComp/teleport',
            name: 'teleport',
            component: () => import( '../views/built-inComp/teleport.vue'),
            meta: {
              title:'teleport 移动',
            }
          },
        ]
      },
      {
        path: '/lifecycle',
        name: 'Lifecycle',
        component: () => import( '../views/Lifecycle.vue'),
        meta: {
          icon:'el-icon-cloudy',
          title:'生命周期钩子',
        }
      },
      {
        path: '/use',
        name: 'Use',
        component: () => import( '../views/Use.vue'),
        meta: {
          icon:'el-icon-cloudy',
          title:'hook',
        }
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
