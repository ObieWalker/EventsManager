import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/appv1';

const port = process.env.port || 8080; 

const app = express(); // init express

//logs to console
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/', router);
app.use('/events', router);
app.use('/centers', router);

app.listen(port, () => {
  console.log('Server running on port', port);
});


export default app;