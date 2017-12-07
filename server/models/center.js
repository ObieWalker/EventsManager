'use strict'
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facility: {
      type: DataTypes.TEXT
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  })

  Center.associate = (models) => {
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
      as: 'event'
    })
  }
  return Center
}
