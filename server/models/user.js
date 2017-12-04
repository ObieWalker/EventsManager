module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: {
          msg: 'Not a valid email'
        }
      }
    },
    photo: {
      type:DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type:DataTypes.BOOLEAN,
      defaultValue:0,
      allowNull: false,
    },
  }); 

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'event',
    });
    // admin
    User.hasMany(models.Center, {
      foreignKey: 'userId',
      as: 'center',
    });
  }
  return User
}
