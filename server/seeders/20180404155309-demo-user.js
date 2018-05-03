// const bcrypt = require('bcrypt');

// module.exports = {
//   up: queryInterface => queryInterface.bulkInsert('Users', [{
//     firstName: 'admin',
//     lastName: 'user',
//     username: 'adminuser',
//     password: bcrypt.hashSync('password', 13),
//     email: 'adminuser@gmail.com',
//     isAdmin: true,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'obi',
//     lastName: 'walker',
//     username: 'obiwalker',
//     password: bcrypt.hashSync('password', 13),
//     email: 'obinnawalker@gmail.com',
//     isAdmin: true,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser1fn',
//     lastName: 'testUser1ln',
//     username: 'testuser1',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testuser1@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser2fn',
//     lastName: 'testUser2ln',
//     username: 'testUser2',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser2@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser3fn',
//     lastName: 'testUser3ln',
//     username: 'testUser3',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser3@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser4fn',
//     lastName: 'testUser4ln',
//     username: 'testUser4',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser4@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser5fn',
//     lastName: 'testUser5ln',
//     username: 'testUser5',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser5@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser6fn',
//     lastName: 'testUser6ln',
//     username: 'testUser6',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser6@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser7fn',
//     lastName: 'testUser7ln',
//     username: 'testUser7',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser7@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser8fn',
//     lastName: 'testUser8ln',
//     username: 'testUser8',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser8@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser9fn',
//     lastName: 'testUser9ln',
//     username: 'testUser3',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser9@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
//   {
//     firstName: 'testUser10fn',
//     lastName: 'testUser10ln',
//     username: 'testUser10',
//     password: bcrypt.hashSync('password', 13),
//     email: 'testUser10@gmail.com',
//     isAdmin: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }], {}),

//   down: queryInterface =>
//     queryInterface.bulkDelete('Users', null, {})
// };

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
//       },
//       {
//         userId: 1,
//         name: 'Kilamanjaor',
//         address: '74, Lekki Way',
//         facility: 'A nice Helipad',
//         capacity: 200,
//         city: 'Lekki',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'Andela Learning Center',
//         address: '121, Ikorodu Road, Illupeju',
//         facility: 'Parking, Elevator',
//         capacity: 500,
//         city: 'Illupeju',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 1,
//         name: 'The Worship Center',
//         address: '1a, Idowu Taylor Street',
//         facility: 'Stage, Air-conditioning, 24hr Security',
//         capacity: 150,
//         city: 'Victoria Island',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'Distrikt',
//         address: '45, Picadilly Square',
//         facility: 'Penthouse',
//         capacity: 1000,
//         city: 'Picadilly',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 1,
//         name: 'The Black swan',
//         address: '99, Swan street',
//         facility: 'Pond and Spring',
//         capacity: 500,
//         city: 'Palm Springs',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'The Bottle',
//         address: '31, Guts street',
//         facility: 'Unlimited supply of alcoholic beverages',
//         capacity: 100,
//         city: 'Lagoon',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'Segun Sams',
//         address: '73, Gbgada Road',
//         facility: 'Strippers',
//         capacity: 50,
//         city: 'Gbgada',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'Kachi\'s Kruger',
//         address: '33, Tambawa Street',
//         facility: 'Robo cops, 24hr customer aid',
//         capacity: 400,
//         city: 'Ikeja',
//         image: '',
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         userId: 2,
//         name: 'LA Bakes',
//         address: '880, Herbert Macauley Way',
//         facility: 'Rice stew very Plenty, Kitchen',
//         capacity: 300,
//         city: 'Yaba',
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

module.exports = {
  up: queryInterface => queryInterface.removeConstraint('Events', 'Events_userId_fkey', {})
    .then(() => queryInterface.removeConstraint('Events', 'Events_centerId_fkey', {}))
    .then(() => queryInterface.bulkInsert(
      'Events',
      [{
        userId: 3,
        centerId: 1,
        eventType: 'Wedding',
        date: '5/4/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        centerId: 2,
        eventType: 'Party',
        date: '5/12/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        centerId: 3,
        eventType: 'Party',
        date: '6/4/2018',
        guestNo: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        centerId: 2,
        eventType: 'Wedding',
        date: '6/6/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        centerId: 4,
        eventType: 'Wedding',
        date: '8/7/2018',
        guestNo: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        centerId: 4,
        eventType: 'Dinner',
        date: '6/7/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        centerId: 4,
        eventType: 'Conference',
        date: '6/8/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 5,
        eventType: 'Wedding',
        date: '5/6/2018',
        guestNo: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 3,
        eventType: 'Wedding',
        date: '8/6/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 8,
        eventType: 'Wedding',
        date: '8/21/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 9,
        eventType: 'Wedding',
        date: '6/15/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 10,
        eventType: 'Wedding',
        date: '6/25/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 11,
        eventType: 'Wedding',
        date: '7/25/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        centerId: 8,
        eventType: 'Wedding',
        date: '6/28/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        centerId: 10,
        eventType: 'Wedding',
        date: '6/29/2018',
        guestNo: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}
      , {}
    ).then(() => {
      queryInterface.addConstraint('Events', ['eventId'], {
        type: 'FOREIGN KEY',
        name: 'Events_userId_fkey',
        references: { // Required field
          table: 'Events',
          field: 'id'
        },
        onDelete: 'set NULL',
        onUpdate: 'cascade'
      });
    })
      .then(() => {
        queryInterface.addConstraint('Events', ['eventId'], {
          type: 'FOREIGN KEY',
          name: 'Events_centerId_fkey',
          references: { // Required field
            table: 'Events',
            field: 'id'
          },
          onDelete: 'set NULL',
          onUpdate: 'cascade'
        });
      })),
  down: queryInterface =>
    queryInterface.bulkDelete('Events', null, {})
};
