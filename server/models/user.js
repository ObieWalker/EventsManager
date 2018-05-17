module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Not a valid email'
        }
      }
    },
    loginTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'event'
    });
    // admin
    User.hasMany(models.Center, {
      foreignKey: 'userId',
      as: 'center'
    });
  };
  return User;
};
