'use strict';
module.exports = (sequelize, DataTypes) => {
  var centers = sequelize.define('centers', {
    centername: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return centers;
};