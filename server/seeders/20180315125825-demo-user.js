const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'admin',
    lastName: 'user',
    username: 'adminuser',
    password: bcrypt.hashSync('password', 13),
    email: 'adminuser@gmail.com',
    isAdmin: true,
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
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser2fn',
    lastName: 'testUser2ln',
    username: 'testUser2',
    password: bcrypt.hashSync('password', 13),
    email: 'testUser2@gmail.com',
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'testUser3fn',
    lastName: 'testUser3ln',
    username: 'testUser3',
    password: bcrypt.hashSync('password', 13),
    email: 'testUser3@gmail.com',
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: queryInterface =>
    queryInterface.bulkDelete('Users', null, {})
};

// module.exports = {
//   up: queryInterface => queryInterface.removeConstraint('Centers', 'Centers_userId_fkey', {})
//     .then(() => queryInterface.bulkInsert(
//       'Centers',
//       [{
//         userId: 1,
//         name: 'The Place',
//         address: '23, Samson Street',
//         facility: 'Swimming Pool, Projector, Parking',
//         capacity: 150,
//         city: 'Victoria Island',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 1,
//         name: 'Jangilova',
//         address: '1b, BamBam Street',
//         facility: 'Back Stage, Mezanine',
//         capacity: 200,
//         city: 'Lekki',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'The Sugar Mama',
//         address: '23, Iyanla Street',
//         facility: 'The Other Room',
//         capacity: 250,
//         city: 'Ikate',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 1,
//         name: 'The Lit Manya',
//         address: '2, Admiralty Way',
//         facility: 'Strip Poll, Summer Jam Screen',
//         capacity: 50,
//         city: 'Lekki',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'Ying Yang',
//         address: '5b, Tambawa Street',
//         facility: '',
//         capacity: 120,
//         city: 'Ajah',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }], {}
//       , {}
//     ).then(() => {
//       queryInterface.addConstraint('Centers', ['centerId'], {
//         type: 'FOREIGN KEY',
//         name: 'Centers_userId_fkey',
//         references: { // Required field
//           table: 'Centers',
//           field: 'id'
//         },
//         onDelete: 'set NULL',
//         onUpdate: 'cascade'
//       });
//     })),
//   down: queryInterface =>
//     queryInterface.bulkDelete('Centers', null, {})
// };

// module.exports = {
//   up: queryInterface => queryInterface.removeConstraint('Events', 'Events_userId_fkey', {})
//     .then(() => queryInterface.bulkInsert(
//       'Events',
//       [{
//         userId: 3,
//         center: 'The Place',
//         eventType: 'Wedding',
//         date: '12/4/2018',
//         guestNo: 120,
//         email: 'testeventuser3@gmail.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 3,
//         center: 'Jangilove',
//         eventType: 'Party',
//         date: '3/12/2018',
//         guestNo: 120,
//         email: 'testeventuser3@gmail.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 3,
//         center: 'The Sugar Mama',
//         eventType: 'Party',
//         date: '4/4/2018',
//         guestNo: 60,
//         email: 'testeventuser3@gmail.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 4,
//         center: 'The Place',
//         eventType: 'Wedding',
//         date: '4/2/2018',
//         guestNo: 120,
//         email: 'testeventuser4@gmail.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 4,
//         center: 'The Lit Manya',
//         eventType: 'Wedding',
//         date: '4/21/2018',
//         guestNo: 80,
//         email: 'testeventuser4@gmail.com',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }], {}
//       , {}
//     ).then(() => {
//       queryInterface.addConstraint('Events', ['eventId'], {
//         type: 'FOREIGN KEY',
//         name: 'Events_userId_fkey',
//         references: { // Required field
//           table: 'Events',
//           field: 'id'
//         },
//         onDelete: 'set NULL',
//         onUpdate: 'cascade'
//       });
//     })),
//   down: queryInterface =>
//     queryInterface.bulkDelete('Events', null, {})
// };
