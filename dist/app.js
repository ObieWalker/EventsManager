'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackConfig3 = require('../webpack.config.prod');

var _webpackConfig4 = _interopRequireDefault(_webpackConfig3);

var _swagger = require('./doc/swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // init express

var port = process.env.PORT || 9000;
var env = process.env.NODE_ENV || 'development';
app.use((0, _expressValidator2.default)());

// logs to console
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/assets')));

var compiler = void 0;
if (env === 'production') {
  compiler = (0, _webpack2.default)(_webpackConfig4.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler));
} else {
  compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    hot: true,
    publicpath: '/',
    stats: { colors: true },
    noInfo: true
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

app.use('/docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

app.use((0, _cors2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, '../client/assets')));

app.use('/api/v1/', _index2.default);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../build/index.html'));
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

// app.all('*', (req, res) => {
//   res.status(404).json({
//     error: {
//       name: 'Error', message: 'Invalid URL Request 🚫'
//     }
//   });
// });


app.listen(port, function () {
  return console.log('Server running on port', port);
});

exports.default = app;