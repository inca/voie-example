import app from 'spa/app';

import UsersService from 'spa/services/users';
import CoursesService from 'spa/services/courses';

import UserLayout from './layout.vue';
import UserInfo from './info.vue';
import UserCourses from './courses.vue';
import UserEnrollment from './enrollment.vue';

app.add('user', {
  parent: 'users',
  path: '/user/:userId',
  redirect: 'user.info',
  enter: (ctx) => UsersService.findById(ctx.params.userId)
    .then(user => ctx.data.user = user),
  component: UserLayout
});

app.add('user.info', {
  component: UserInfo
});

app.add('user.courses', {
  path: 'members',
  enter: (ctx) => CoursesService.findByUser(ctx.data.user)
    .then(courses => ctx.data.courses = courses),
  component: UserCourses
});

app.add('user.enrollment', {
  path: 'course/:courseId',
  enter: (ctx) =>
    CoursesService.findById(ctx.params.courseId)
      .then(course => {
        let user = ctx.data.user;
        ctx.data.course = course;
        ctx.data.isMember = user.courses.indexOf(course.id) > -1;
      }),
  component: UserEnrollment
});
