import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import SkillSwapView from '../views/SkillSwapView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import UserProfileEdit from '../views/UserProfileEdit.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
  },

  {
    path: '/skillSwap',
    name: 'SkillSwapView',
    component: SkillSwapView
  },
  {
    path: '/my-profile',
    name: 'UserProfileView',
    component: UserProfileView
  },
  {
    path: '/user-profile-edit',
    name: 'user-profile-edit',
    component: UserProfileEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
