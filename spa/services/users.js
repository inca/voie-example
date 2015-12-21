import USERS from 'spa/db/users.json';

export default {

  findAll: () => new Promise(resolve => {
    setTimeout(() => resolve(USERS), 1000);
  }),

  findById: userId => new Promise(resolve => {
    setTimeout(() => resolve(USERS.find(u => u.id == userId)), 1000);
  })

}
