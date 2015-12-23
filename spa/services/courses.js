import COURSES from 'spa/db/courses.json';
import app from 'spa/app';

export default {

  findAll: () => new Promise(resolve => {
    setTimeout(() => resolve(COURSES), app.fakeDataDelay);
  }),

  findById: courseId => new Promise((resolve, reject) => {
    let course = COURSES.find(c => c.id == courseId);
    setTimeout(() => {
      if (course) resolve(course);
      else reject(new Error('Course not found.'));
    }, app.fakeDataDelay);
  }),

  findByUser: user => new Promise(resolve => {
    let courses = user.courses
      .map(id => COURSES.find(c => c.id == id))
      .filter(Boolean);
    setTimeout(() => resolve(courses), app.fakeDataDelay);
  })

}
