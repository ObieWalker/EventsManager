//import http from 'http';
import express from 'express';
import bodyparser from 'body-parser';

import config from './config';
import routes from './routes';
const app = express();


app.use('/', function(req, res){
	res.send({
		message: "Hello Lagos\n"
	});
});


app.use(bodyparser.json());

app.use('v1', routes);

app.listen(config.port, () =>{
	console.log(`Server running on port ${config.port}`);
});

export default app;
//console.log(Listening to port 3001);
/*http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Naija\n');
}).listen(3001);
console.log('Server running at http://localhost:3001/');*/