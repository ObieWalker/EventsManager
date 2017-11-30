'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    eventype: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return events;
};