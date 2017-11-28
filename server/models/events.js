'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
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