import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Recommend = () => import('views/Recommend');
const Rank = () => import('views/Rank');
const Singer = () => import('views/Singer');
const SongList = () => import('views/SongList');
const NewSongs = () => import('views/NewSongs');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
        {
          path: '/',
          redirect: '/recommend'
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/rank',
          name: 'rank',
          component: Rank
        },
        {
          path: '/singer',
          name: 'singer',
          component: Singer
        },
        {
          path: '/songlist',
          name: 'songlist',
          component: SongList
        },
        {
          path: '/newsongs',
          name: 'newsongs',
          component: NewSongs
        },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
