module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    center: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
    },
    guestNo: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Events',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Events',
        key: 'id',
        as: 'centerId'
      }
    }
  }),
  down: queryInterface => queryInterface.dropTable('Events'),
};
