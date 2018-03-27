

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
    center: {
      type: DataTypes.STRING,
      allowNull: false
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Not a valid email'
        }
      }
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
