import app from 'spa/app';

import UsersService from 'spa/services/users';

import UsersLayout from './layout.vue';
import UsersSelect from './select.vue';

app.add('users', {
  parent: 'root',
  url: '/users',
  redirect: 'users.select',
  enter: (ctx) => UsersService.findAll().then(users => {
    ctx.data.users = users;
  }),
  component: UsersLayout
});

app.add('users.select', {
  component: UsersSelect
});
