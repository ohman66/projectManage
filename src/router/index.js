import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import apply from '../components/project/applypro.vue'
import promanage from '../components/project/ProjectManage.vue'
import prodetail from '../components/project/prodetail.vue'
import proinfor from '../components/project/task/proinfor.vue'
import taskmanage from '../components/project/task/taskmanage.vue'
import applytask from '../components/project/task/applytask.vue'
import taskdetail from '../components/project/task/taskdetail.vue'
import taskmanagers from '../components/project/task/taskmanagers.vue'
import addmanager from '../components/project/task/addmanager.vue'

Vue.use(VueRouter)

const routes = [
	/* {
			path: '/',
			name: 'Home',
			component: Home
		}, 
		{
			path: '/about',
			name: 'About',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( '../views/About.vue')
		} */
	{
		path: '/apply',
		name: 'Apply',
		component: apply
	},
	{
		path: '/',
		name: 'ProManage',
		component: promanage
	},
	{
		path: '/prodetail',
		name: 'ProDetail',
		component: prodetail,
		children:[{
			path: '/prodetail/proinfor',
			name: 'ProInfor',
			component: proinfor
		},
		{
			path: '/prodetail/taskmanage',
			name: 'TaskManage',
			component: taskmanage
		}],
		redirect:'/prodetail/proinfor'
	},
	{
		path:'/prodetail/applytask',
		name:'ApplyTask',
		component:applytask
	},
	{
		path:'/prodetail/taskmanage/taskdetail',
		name:'TaskDetil',
		component:taskdetail
	},
	{
		path:'/prodetail/taskmanage/taskmanagers',
		name:'TaskManagers',
		component:taskmanagers
	},
	{
		path:'/prodetail/taskmanage/taskmanagers/addmanager',
		name:'AddManager',
		component:addmanager
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
