
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false,
    }.
    username:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type:DataTypes.VARCHAR,
      allowNull:false,
      validate: {
        isEmail: {
           msg: 'Not a valid email'
        }
      }
    },
    photo: {
      type:DataTypes.STRING,
    }
    isAdmin: {
      DataTypes.BOOLEAN,
      defaultValue:0,
  },
 }); 

    Users.associate = (models) => {
    Users.hasMany(models.Events, {
      foreignKey: 'userId',
      as: 'event',
    });
    Users.hasMany(models.Centers, {
      foreignKey: 'userId',
      as: 'center',
    });
  }
 return Users;
};