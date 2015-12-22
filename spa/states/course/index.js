import app from 'spa/app';

import UsersService from 'spa/services/users';
import CoursesService from 'spa/services/courses';

import CourseLayout from './layout.vue';
import CourseInfo from './info.vue';
import CourseMembers from './members.vue';

app.add('course', {
  parent: 'courses',
  url: '/course/:courseId',
  redirect: 'course.info',
  enter: (ctx) => CoursesService.findById(ctx.params.courseId)
    .then(course => ctx.data.course = course),
  component: CourseLayout
});

app.add('course.info', {
  component: CourseInfo
});

app.add('course.members', {
  url: 'members',
  enter: (ctx) => UsersService.findByCourse(ctx.data.course)
    .then(users => ctx.data.members = users),
  component: CourseMembers
});
