webpackHotUpdate("main",{

/***/ "./client/src/components/testComponent.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/testComponent.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _CreateCenter = __webpack_require__(/*! ./AdminDashboard/CreateCenter.jsx */ \"./client/src/components/AdminDashboard/CreateCenter.jsx\");\n\nvar _CreateCenter2 = _interopRequireDefault(_CreateCenter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar test = function (_Component) {\n  _inherits(test, _Component);\n\n  function test() {\n    _classCallCheck(this, test);\n\n    return _possibleConstructorReturn(this, (test.__proto__ || Object.getPrototypeOf(test)).apply(this, arguments));\n  }\n\n  _createClass(test, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'd-flex flex-row mt-2' },\n        _react2.default.createElement(\n          _reactBootstrap.Tab.Container,\n          { id: 'left-tabs-example', defaultActiveKey: 'first' },\n          _react2.default.createElement(\n            _reactBootstrap.Row,\n            { className: 'clearfix' },\n            _react2.default.createElement(\n              _reactBootstrap.Col,\n              { sm: 4 },\n              _react2.default.createElement(\n                _reactBootstrap.Nav,\n                { bsStyle: 'pills', stacked: true },\n                _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement(\n                    'div',\n                    { style: { display: 'flex', padding: '2%', background: '#blue' } },\n                    _react2.default.createElement(\n                      'div',\n                      { style: { width: '100%', height: '60%' } },\n                      _react2.default.createElement('img', { src: 'http://i63.tinypic.com/hs454x.jpg',\n                        style: { borderRadius: '20px', width: '100%', height: 200 }\n                      })\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.NavItem,\n                  { eventKey: 'first' },\n                  'Add a '\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.NavItem,\n                  { eventKey: 'second' },\n                  'Add a Center'\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.NavItem,\n                  { eventKey: 'third' },\n                  'All Events'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactBootstrap.Col,\n              { sm: 8 },\n              _react2.default.createElement(\n                _reactBootstrap.Tab.Content,\n                { animation: true },\n                _react2.default.createElement(\n                  _reactBootstrap.Tab.Pane,\n                  { eventKey: 'first' },\n                  _react2.default.createElement(_CreateCenter2.default, null)\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Tab.Pane,\n                  { eventKey: 'second' },\n                  'Tab 2 content'\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Tab.Pane,\n                  { eventKey: 'third' },\n                  'Tab 2 content'\n                )\n              )\n            )\n          )\n        ),\n        ';'\n      );\n    }\n  }]);\n\n  return test;\n}(_react.Component);\n\nexports.default = test;\n\n//# sourceURL=webpack:///./client/src/components/testComponent.jsx?");

/***/ })

})