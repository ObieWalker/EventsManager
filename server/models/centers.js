'use strict';
module.exports = (sequelize, DataTypes) => {
  const Centers = sequelize.define('Centers', {
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
      defaultValue:0,
      allowNull:false,
  },
 }); 

    Centers.associate = (models) => {
      Centers.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
      Centers.hasMany(models.Events, {
        foreignKey: 'centerId',
        as: 'event',
      });
  }
 return Centers;
};