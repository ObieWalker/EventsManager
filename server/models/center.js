'use strict'
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    centername: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },            
    },
    location: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    bookdate: {
      type: DataTypes.DATEONLY,
      allowNull:true,
    },
    facility: {
      type:DataTypes.TEXT,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    bookstatus: {
      type:DataTypes.BOOLEAN,
      defaultValue: 0,
      allowNull:false,
    },
  }); 

  Center.associate = (models) => {
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
      as: 'event',
    });
  }
  return Center;
};