const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'admin',
    lastName: 'user',
    username: 'adminuser',
    password: bcrypt.hashSync('password', 3),
    email: 'adminuser@gmail.com',
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'obi',
    lastName: 'walker',
    username: 'obiwalker',
    password: bcrypt.hashSync('password', 3),
    email: 'obinnawalker@gmail.com',
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: queryInterface =>
    queryInterface.bulkDelete('Users', null, {})
};

module.exports = {
  up: queryInterface => queryInterface.removeConstraint('Centers', 'Centers_userId_fkey', {}).then(() => queryInterface.bulkInsert(
    'Centers',
    [{
      userId: 5,
      name: 'The Place',
      address: '23, Samson Street',
      facility: 'Swimming Pool, Projector, Parking',
      capacity: 150,
      city: 'Victoria Island',
      isAvailable: true,
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 6,
      name: 'Jangilova',
      address: '1b, BamBam Street',
      facility: 'Back Stage, Mezanine',
      capacity: 200,
      city: 'Lekki',
      isAvailable: true,
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}
    , {}
  ).then(() => {
    queryInterface.addConstraint('Centers', ['centerId'], {
      type: 'FOREIGN KEY',
      name: 'Centers_userId_fkey',
      references: { // Required field
        table: 'Centers',
        field: 'id'
      },
      onDelete: 'set NULL',
      onUpdate: 'cascade'
    });
  })),
  down: queryInterface =>
    queryInterface.bulkDelete('Centers', null, {})
};
