import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'

import home from '../pages/home'
import profile from '../pages/profile'
import message from '../pages/message.vue'
import download from '../pages/download.vue'
import setting from '../pages/setting.vue'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        },
        {
          name: 'message',
          path: '/message',
          component:message
        },
        {
          name: 'download',
          path: '/download',
          component:download
        },
        {
          name: 'setting',
          path: '/setting',
          component:setting
        },
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  