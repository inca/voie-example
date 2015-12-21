import app from 'spa/app';

import UsersService from 'spa/services/users';
import UserLayout from './layout.vue';

app.add('user', {
  parent: 'users',
  url: '/user/:userId',
  enter: (ctx) => UsersService.findById(ctx.params.userId)
    .then(user => ctx.data.user = user),
  component: UserLayout
});
