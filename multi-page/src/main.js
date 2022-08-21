import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import TeamsMembers from './components/teams/TeamMembers';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersList from './components/users/UsersList';
import UserFooter from './components/users/UserFooter';
import NotFound from './components/nav/NotFound';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      //   component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamsMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // { path: '/teams/:teamId', component: TeamsMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.name === 'team-members') {
    next();
  } else {
    next({ name: 'team-members', params: { teamId: 't2' } });
  }
  next();
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global After Each');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
