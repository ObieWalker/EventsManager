import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import swaggerUi from 'swagger-ui-express';
// import webpack from 'webpack';
import cors from 'cors';
import dotenv from 'dotenv';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
// import webpackConfigDev from '../webpack.config.dev';
// import webpackConfigProd from '../webpack.config.prod';
import swaggerDoc from './doc/swagger.json';
import router from './routes/index';

const app = express(); // init express
dotenv.config();

const port = process.env.PORT || 9000;
// const env = process.env.NODE_ENV || 'development';
app.use(expressValidator());

// logs to console
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
// let compiler;
// if (env === 'production') {
//   compiler = webpack(webpackConfigProd);
//   app.use(webpackMiddleware(compiler));
// } else {
//   compiler = webpack(webpackConfigDev);
//   app.use(webpackMiddleware(compiler, {
//     hot: true,
//     publicpath: '/',
//     stats: { colors: true },
//     noInfo: true
//   }));
//   app.use(webpackHotMiddleware(compiler));
//   app.get('*', (req, res, next) => {
//     compiler.outputFileSystem
//       .readFile(path.join(__dirname, '..', 'build', 'index.html'), (err, result) => {
//         if (err) {
//           return next(err);
//         }
//         res.set('content-type', 'text/html');
//         res.send(result);
//         res.end();
//       });
//   });
// }

app.use(cors());

app.use('/api/v1/', router);

// app.use('/', express.static('build'));
// app.use(express.static(path.join(__dirname, '../client/public')));
// app.get('/*', (req, res) => {
//   // When there is an invalid request
//   res.status(404).json({error: {name: 'Error', message: 'Invalid URL Request 🚫'}
//   })
// })


app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/'));
});
// app.use(express.static(path.join(__dirname, '../client/public')));
// app.get('*', (req,res) =>{
//   res.send('index')
// })
app.use((req, res, next) => {
  const err = res.status(404).send({
    error: '404: Sorry Page Not Found!'
  });
  next(err);
});


app.listen(port, () => console.log('Server running on port', port));

export default app;
