import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '../views/Project2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/projects/synthwave',
    name: 'project1',
    component: Project1
  },
  {
    path: '/projects/project2',
    name: 'project2',
    component: Project2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
