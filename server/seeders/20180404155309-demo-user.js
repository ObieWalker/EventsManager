const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'admin',
    lastName: 'user',
    username: 'adminuser',
    password: bcrypt.hashSync('password', 13),
    email: 'adminuser@gmail.com',
    isAdmin: true,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'obi',
    lastName: 'walker',
    username: 'obiwalker',
    password: bcrypt.hashSync('password', 13),
    email: 'obinnawalker@gmail.com',
    isAdmin: true,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser1fn',
    lastName: 'testUser1ln',
    username: 'testuser1',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser1@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser2fn',
    lastName: 'testUser2ln',
    username: 'testUser2',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser2@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser3fn',
    lastName: 'testUser3ln',
    username: 'testUser3',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser3@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser4fn',
    lastName: 'testUser4ln',
    username: 'testUser4',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser4@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser5fn',
    lastName: 'testUser5ln',
    username: 'testUser5',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser5@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser6fn',
    lastName: 'testUser6ln',
    username: 'testUser6',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser6@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser7fn',
    lastName: 'testUser7ln',
    username: 'testUser7',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser7@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser8fn',
    lastName: 'testUser8ln',
    username: 'testUser8',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser8@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser9fn',
    lastName: 'testUser9ln',
    username: 'testUser3',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser9@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser10fn',
    lastName: 'testUser10ln',
    username: 'testUser10',
    password: bcrypt.hashSync('password', 13),
    email: 'testuser10@gmail.com',
    isAdmin: false,
    loginTime: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: queryInterface =>
    queryInterface.bulkDelete('Users', null, {})
};
