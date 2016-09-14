import Vue from 'vue'
import App from './App'
import Select from './components/select'
import Home from './components/home'
import Playsong from './components/playsong'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Love from './components/lovemic'
import Search from './components/search'
import Filters from './filters'//引入过滤器
Vue.use(VueResource)
Vue.use(VueRouter)
Filters(Vue)//使用过滤器
const router = new VueRouter()//构造出 router对象

router.map({
	'/home':{
		component:Home,
		subRoutes:{
			'/select':{
				component:Select
			},
			'/love':{
				component:Love
			},
			'/search':{
				component:Search
			}
		}
	},
	'/playsong':{
		component:Playsong,
	}


})
router.redirect({
  '*': '/home/select'
})
/* eslint-disable no-new */

router.start(App, '#app')
