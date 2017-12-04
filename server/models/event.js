'use strict'
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      },   
    },
    centerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Center',
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

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE',
    });
  };
  return Event;
};