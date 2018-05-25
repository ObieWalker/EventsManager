/*eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Centers',
      [{
        userId: 1,
        name: 'The Place',
        address: '23, Samson Street',
        facility: 'Swimming Pool, Projector, Parking',
        capacity: 150,
        city: 'Victoria Island',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Jangilova',
        address: '1b, BamBam Street',
        facility: 'Back Stage, Mezanine',
        capacity: 200,
        city: 'Lekki',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'The Sugar Mama',
        address: '23, Iyanla Street',
        facility: 'The Other Room',
        capacity: 250,
        city: 'Ikate',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'The Lit Manya',
        address: '2, Admiralty Way',
        facility: 'Strip Poll, Summer Jam Screen',
        capacity: 50,
        city: 'Lekki',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Ying Yang',
        address: '5b, Tambawa Street',
        facility: '',
        capacity: 120,
        city: 'Ajah',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Kilamanjaor',
        address: '74, Lekki Way',
        facility: 'A nice Helipad',
        capacity: 200,
        city: 'Lekki',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Andela Learning Center',
        address: '121, Ikorodu Road, Illupeju',
        facility: 'Parking, Elevator',
        capacity: 500,
        city: 'Illupeju',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'The Worship Center',
        address: '1a, Idowu Taylor Street',
        facility: 'Stage, Air-conditioning, 24hr Security',
        capacity: 150,
        city: 'Victoria Island',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Distrikt',
        address: '45, Picadilly Square',
        facility: 'Penthouse',
        capacity: 1000,
        city: 'Picadilly',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'The Black swan',
        address: '99, Swan street',
        facility: 'Pond and Spring',
        capacity: 500,
        city: 'Palm Springs',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'The Bottle',
        address: '31, Guts street',
        facility: 'Unlimited supply of alcoholic beverages',
        capacity: 100,
        city: 'Lagoon',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Segun Sams',
        address: '73, Gbgada Road',
        facility: 'Strippers',
        capacity: 50,
        city: 'Gbgada',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Kachi\'s Kruger',
        address: '33, Tambawa Street',
        facility: 'Robo cops, 24hr customer aid',
        capacity: 400,
        city: 'Ikeja',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'LA Bakes',
        address: '880, Herbert Macauley Way',
        facility: 'Rice stew very Plenty, Kitchen',
        capacity: 300,
        city: 'Yaba',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Centers', null, {});
  }
};
