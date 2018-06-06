import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import swaggerUi from 'swagger-ui-express';
import webpack from 'webpack';
import cors from 'cors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import webpackConfigDev from '../webpack.config.dev';
import webpackConfigProd from '../webpack.config.prod';
import swaggerDoc from './doc/swagger.json';
import router from './routes/index';

const app = express(); // init express

const port = process.env.PORT || 9000;
const env = process.env.NODE_ENV || 'development';
app.use(expressValidator());

// logs to console
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, '../client/assets')));

let compiler;
if (env === 'production') {
  compiler = webpack(webpackConfigProd);
  app.use(webpackMiddleware(compiler));
} else {
  compiler = webpack(webpackConfigDev);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicpath: '/',
    stats: { colors: true },
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/assets')));

app.use('/api/v1/', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
// app.use(express.static(path.join(__dirname, '../client/public')));
// app.get('*', (req,res) =>{
//   res.send('index')
// })
// app.use((req, res, next) => {
//   const err = res.status(404).send({
//     error: '404: Sorry Page Not Found!'
//   });
//   next(err);
// });

app.all('*', (req, res) => {
  res.status(404).json({
    error: {
      name: 'Error', message: 'Invalid URL Request 🚫'
    }
  });
});


app.listen(port, () => console.log('Server running on port', port));

export default app;
