
module.exports = (sequelize, Datatypes) =>{
	const Users = sequelize.define('Users', {
		firstname: {
			type:Datatypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: Datatypes.STRING,
			allowNull: false,
		},
		username: {
			type:Datatypes.STRING,
			allowNull: false,
		},
		password: {
			type: Datatypes.STRING,
			allowNull: false,			
		},
		email: {
			type: Datatypes.STRING,
			allowNull: false,
			isEmail: true
		},
		photo:{
			type: Datatypes.STRING,
		},
	});
	Users.associate = (models) =>{
		Users.hasMany(models.Events, {
			foreignKey: 'userId',
			as: 'event',
		});
	};
	return Users;
}