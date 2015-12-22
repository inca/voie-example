import app from 'spa/app';

import CoursesService from 'spa/services/courses';

import CoursesLayout from './layout.vue';
import CoursesSelect from './select.vue';

app.add('courses', {
  parent: 'root',
  url: '/courses',
  redirect: 'courses.select',
  enter: (ctx) => CoursesService.findAll().then(courses => {
    ctx.data.courses = courses;
  }),
  component: CoursesLayout
});

app.add('courses.select', {
  component: CoursesSelect
});
