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
    }
    bookstatus: {
      DataTypes.BOOLEAN,
      defaultValue:0,
      allowNull:false,
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