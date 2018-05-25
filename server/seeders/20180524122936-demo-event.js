/*eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
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
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
