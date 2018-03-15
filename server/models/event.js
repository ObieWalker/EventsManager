

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
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
    centerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    guestNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Event.associate = (models) => {
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
