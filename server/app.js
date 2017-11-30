import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/v1';
import validator from 'express-validator';

const port = process.env.port || 8080; 

const app = express(); // init express

//logs to console
app.use(logger('dev'));
//reads the body data and parses it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//define after body parser
app.use(validator());
app.use('/', router);
app.use('/events', router);
app.use('/centers', router);
app.use('/users', router);

app.all('*', (req, res) => {
  res.status(404).send('404: Not Found');
});

app.listen(port, () => {
  console.log('Server running on port', port);
});


export default app;