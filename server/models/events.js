'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    userId: {
      DataTypes.INTEGER,
      allowNull:false,
    },
    centerId: {
      DataTypes: INTEGER,
      allowNull:false,
    },
    eventtype: {
      DataTypes.STRING,
      allowNull:false,
    },
    eventdate: {
      DataTypes.DATEONLY,
      allowNull:false,
    },
    guestno: {
      DataTypes.INTEGER,
      allowNull: true,
    },
  });


  Events.associate = (models) => {
    Events.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Events.belongsTo(models.Centers, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });
  };
  return Events;
};