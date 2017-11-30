var pg = require('pg');

const pool = new pg.Pool({
	user:process.env.DB_USER,
	database: 'eventsmanager',
	password: process.env.DB_PASS,
	name: 'eventmanager',
	host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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


