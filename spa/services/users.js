import USERS from 'spa/db/users.json';

export default {

  findAll: () => new Promise(resolve => {
    setTimeout(() => resolve(USERS), 1000);
  }),

  findById: userId => new Promise((resolve, reject) => {
    let user = USERS.find(u => u.id == userId);
    setTimeout(() => {
      if (user) resolve(user);
      else reject(new Error('User not found.'));
    }, 500);
  }),

  findByCourse: course => new Promise(resolve => {
    let users = USERS.filter(u => u.courses.indexOf(course.id) > -1);
    setTimeout(() => resolve(users), 500);
  })

}
