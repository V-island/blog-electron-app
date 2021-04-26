import VueRouter from "vue-router"
import Desktop from '../views/desktop/List.vue'
import bookmarks from './bookmarks'

// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Desktop
    },
    ...bookmarks
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
};

// 构建VueRouter对象
let vueRouter = new VueRouter(router);

export default vueRouter;
