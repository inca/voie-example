import app from 'spa/app';

import Root from './root.vue';
import Home from './home.vue';

app.add('root', {
  component: Root,
  redirect: 'home'
});

app.add('home', {
  parent: 'root',
  component: Home
});
