var pg = require('pg');

const pool = new pg.Pool({
	user:'obiwalker',
	database: 'eventsmanager',
	password: 'biskie',
	name: 'eventmanager',
	host: "127.0.0.1",
    port: 5432,
    max: 100
});

pool.connect(function(err, client, done){
	client.query(`
	CREATE TABLE IF NOT EXISTS users(
		id SERIAL PRIMARY KEY,
		name STRING,
		email VARCHAR,
		password STRING,
		privileges BOOLEAN FOREIGN KEY,
		centerId INTEGER FOREIGN KEY
	)`, function(err, results){
		console.log(err);
		console.log(results);
		done();
	});

})


