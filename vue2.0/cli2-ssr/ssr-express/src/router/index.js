import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import ('../components/HelloWorld.vue')
const Home = () => import ('../routes/home.vue')
const Animal = () => import ('../routes/animal.vue')
const People = () => import ('../routes/people.vue')

Vue.use(VueRouter)

export function createRouter() {
  let router = new VueRouter({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/animal',
        name: 'Animal',
        component: Animal
      },
      {
        path: '/people',
        name: 'People',
        component: People
      }
    ]
  })

  return router
}