import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// Vue.use(Router);
import App from '../App.vue'
// import First from '../components/app/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      // component: First,
      redirect: '/app/index'
    },
    {
        path:'/app',
        name:'app',
        component:App,
        // component(resolve, reject) {//异步加载组件
        //         require.ensure([], () => resolve(require('../App.vue')), 'app')
        // },
        children:[{
            path:'index',
            name:'first',
            component(resolve, reject) {//异步加载组件
                require.ensure([], () => resolve(require('../components/app/index.vue')), 'first')
            },
        }]
    }
  ]
})
