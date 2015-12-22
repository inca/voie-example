import COURSES from 'spa/db/courses.json';

export default {

  findAll: () => new Promise(resolve => {
    setTimeout(() => resolve(COURSES), 1000);
  }),

  findById: courseId => new Promise((resolve, reject) => {
    let course = COURSES.find(c => c.id == courseId);
    setTimeout(() => {
      if (course) resolve(course);
      else reject(new Error('Course not found.'));
    }, 500);
  }),

  findByUser: user => new Promise(resolve => {
    let courses = user.courses
      .map(id => COURSES.find(c => c.id == id))
      .filter(Boolean);
    setTimeout(() => resolve(courses), 1000);
  })

}
