webpackHotUpdate("main",{

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _history = __webpack_require__(/*! ../../history */ \"./client/history.js\");\n\nvar _history2 = _interopRequireDefault(_history);\n\nvar _Header = __webpack_require__(/*! ./Header.jsx */ \"./client/src/components/Header.jsx\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Home = __webpack_require__(/*! ./Home.jsx */ \"./client/src/components/Home.jsx\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Register = __webpack_require__(/*! ./Register.jsx */ \"./client/src/components/Register.jsx\");\n\nvar _Register2 = _interopRequireDefault(_Register);\n\nvar _ContactUs = __webpack_require__(/*! ./ContactUs.jsx */ \"./client/src/components/ContactUs.jsx\");\n\nvar _ContactUs2 = _interopRequireDefault(_ContactUs);\n\nvar _Centers = __webpack_require__(/*! ./Centers.jsx */ \"./client/src/components/Centers.jsx\");\n\nvar _Centers2 = _interopRequireDefault(_Centers);\n\nvar _Main = __webpack_require__(/*! ./UserDashboard/Main.jsx */ \"./client/src/components/UserDashboard/Main.jsx\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _Dashboard = __webpack_require__(/*! ./AdminDashboard/Dashboard.jsx */ \"./client/src/components/AdminDashboard/Dashboard.jsx\");\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nvar _testComponent = __webpack_require__(/*! ./testComponent.jsx */ \"./client/src/components/testComponent.jsx\");\n\nvar _testComponent2 = _interopRequireDefault(_testComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import UTabMenu from './UserDashboard/UTabMenu';\n\n// import AdminCenters from './AdminDashboard/AdminCenters';\n\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouterDom.Router,\n        { history: _history2.default },\n        _react2.default.createElement(\n          'div',\n          { style: { textAlign: 'center' } },\n          _react2.default.createElement(_Header2.default, null),\n          _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/test/', component: _testComponent2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Centers2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Home2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/contact-us', component: _ContactUs2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _Main2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: _Dashboard2.default })\n          )\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./client/src/components/UserDashboard/Dashboard.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/UserDashboard/Dashboard.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _BookCenter = __webpack_require__(/*! ./BookCenter.jsx */ \"./client/src/components/UserDashboard/BookCenter.jsx\");\n\nvar _BookCenter2 = _interopRequireDefault(_BookCenter);\n\nvar _ViewEvents = __webpack_require__(/*! ./ViewEvents.jsx */ \"./client/src/components/UserDashboard/ViewEvents.jsx\");\n\nvar _ViewEvents2 = _interopRequireDefault(_ViewEvents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard() {\n    _classCallCheck(this, Dashboard);\n\n    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));\n  }\n\n  _createClass(Dashboard, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'd-flex flex-row mt-2' },\n        _react2.default.createElement(\n          _reactBootstrap.Tab.Container,\n          { id: 'left-tabs-example', defaultActiveKey: 'first' },\n          _react2.default.createElement(\n            _reactBootstrap.Row,\n            { className: 'clearfix' },\n            _react2.default.createElement(\n              _reactBootstrap.Col,\n              { sm: 4 },\n              _react2.default.createElement(\n                _reactBootstrap.Nav,\n                { bsStyle: 'pills', stacked: true },\n                _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement(\n                    'div',\n                    { style: { display: 'flex', padding: '2%', background: '#blue' } },\n                    _react2.default.createElement(\n                      'div',\n                      { style: { width: '100%', height: '60%' } },\n                      _react2.default.createElement('img', { src: 'http://i63.tinypic.com/hs454x.jpg',\n                        style: { borderRadius: '20px', width: '100%', height: 200 }\n                      })\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.NavItem,\n                  { eventKey: 'first' },\n                  'Book a Center'\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.NavItem,\n                  { eventKey: 'second' },\n                  'View your Events'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactBootstrap.Col,\n              { sm: 8 },\n              _react2.default.createElement(\n                _reactBootstrap.Tab.Content,\n                { animation: true },\n                _react2.default.createElement(\n                  _reactBootstrap.Tab.Pane,\n                  { eventKey: 'first' },\n                  _react2.default.createElement(_BookCenter2.default, null)\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Tab.Pane,\n                  { eventKey: 'second' },\n                  _react2.default.createElement(_ViewEvents2.default, null)\n                )\n              )\n            )\n          )\n        ),\n        ';'\n      );\n    }\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nexports.default = Dashboard;\n\n//# sourceURL=webpack:///./client/src/components/UserDashboard/Dashboard.jsx?");

/***/ }),

/***/ "./client/src/components/UserDashboard/Main.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/UserDashboard/Main.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Dashboard = __webpack_require__(/*! ./Dashboard.jsx */ \"./client/src/components/UserDashboard/Dashboard.jsx\");\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UDashboard = function (_Component) {\n  _inherits(UDashboard, _Component);\n\n  function UDashboard() {\n    _classCallCheck(this, UDashboard);\n\n    return _possibleConstructorReturn(this, (UDashboard.__proto__ || Object.getPrototypeOf(UDashboard)).apply(this, arguments));\n  }\n\n  _createClass(UDashboard, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Dashboard2.default, null)\n      );\n    }\n  }]);\n\n  return UDashboard;\n}(_react.Component);\n\nexports.default = UDashboard;\n\n//# sourceURL=webpack:///./client/src/components/UserDashboard/Main.jsx?");

/***/ }),

/***/ "./client/src/components/UserDashboard/UDashboard.jsx":
false,

/***/ "./client/src/components/UserDashboard/UTabMenu.jsx":
false,

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/is-plain-object/node_modules/isobject/index.js":
false,

/***/ "./node_modules/react-router/es/index.js":
false,

/***/ "./node_modules/react-sidenav/Nav.js":
false,

/***/ "./node_modules/react-sidenav/SideNav.js":
false,

/***/ "./node_modules/react-sidenav/index.js":
false,

/***/ "./node_modules/react-sidenav/withRR4.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.es.js":
false,

/***/ "./node_modules/styled-components/node_modules/hoist-non-react-statics/index.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.js":
false

})