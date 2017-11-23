export default (sequelize, Datatypes) => {
	const Event =  sequelize.define('Event', {
		
		userId: {
			type: Datatypes.INTEGER,
		},
		eventDate: {
			type: Datatypes.DATEONLY,
		},
		eventLocation: {
			type: Datatypes.TEXT,
		},
		eventGuestNo: {
			type: Datatypes.INTEGER,
			allowNull: false,
		},
		eventType: {
			type: Datatypes.TEXT,
			allowNull: false,
		},
		eventFacility: {
			type: Datatypes.TEXT,
		}
	});
	Event.associate = (models) =>{
		Event.belongsTo(models.Users, {
			foreignKey: 'userId',
		});
	};
	return Events;
}