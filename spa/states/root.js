import app from 'spa/app';

import Root from './root.vue';

app.add('root', {
  component: Root,
  redirect: 'home'
});
