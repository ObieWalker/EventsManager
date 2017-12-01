'use strict'
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },   
    },
    centerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Centers',
        key: 'id',
        as: 'centerId',
      },   
    },
    eventtype: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    eventdate: {
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    guestno: {
      type: DataTypes.INTEGER,
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