import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('@/views/home/Home.vue')
const Device=()=>import('@/views/device/Device.vue')
const Minitor=()=>import('@/views/minitor/Minitor.vue')
const Profile=()=>import('@/views/profile/Profile.vue')

Vue.use(VueRouter)
const routes = [
	{
		path:'',
		redirect:"/home"
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/device',
		component:Device
	},
	{
		path:'/minitor',
		component:Minitor
	},
	{
		path:'/profile',
		component:Profile
	},
	
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
