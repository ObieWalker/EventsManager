'use strict';
module.exports = (sequelize, DataTypes) => {
  const Centers = sequelize.define('Centers', {
    centername: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull:false,
    }.
    address:{
      type: DataTypes.CHAR,
      allowNull:false,
    },
    bookdate: {
      type: DataTypes.DATEONLY,
    },
    facility: {
      type:DataTypes.TEXT,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull:false,
    }
    bookstatus: {
      DataTypes.BOOLEAN,
      defaultValue:0,
  },
 }); 

    Centers.associate = (models) => {
    Centers.hasMany(models.Users, {
      foreignKey: 'centerId',
      as: 'user',
    });
    Centers.hasMany(models.Events, {
      foreignKey: 'centerId',
      as: 'event',
    });
  }
 return Centers;
};