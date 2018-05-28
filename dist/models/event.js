'use strict';

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Center',
        key: 'id',
        as: 'centerId'
      }
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    guestNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isCancelled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    }
  });

  Event.associate = function (models) {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };
  return Event;
};