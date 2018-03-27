webpackHotUpdate("main",{

/***/ "./client/src/components/CenterCard.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/CenterCard.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactMaterialize = __webpack_require__(/*! react-materialize */ \"./node_modules/react-materialize/lib/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CenterCard = function CenterCard(props) {\n  var centers = props.centers;\n\n  return _react2.default.createElement(\n    'div',\n    { style: { margin: '5%' } },\n    _react2.default.createElement(\n      _reactMaterialize.Col,\n      { s: 10, m: 4 },\n      _react2.default.createElement(\n        'div',\n        { className: 'col 12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card small' },\n          _react2.default.createElement(\n            'div',\n            { className: 'card-image waves-effect waves-block waves-light' },\n            _react2.default.createElement('img', { className: 'activator', src: 'http://i68.tinypic.com/dh5vk.jpg' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'card-content' },\n            _react2.default.createElement(\n              'span',\n              { className: 'card-title activator grey-text text-darken-4' },\n              centers.name,\n              _react2.default.createElement(\n                'i',\n                { className: 'material-icons right' },\n                'more_vert'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: { float: 'left' } },\n              centers.city,\n              ' '\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'p',\n              { style: { float: 'left' } },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/', href: true },\n                'Book Center'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'card-reveal' },\n            _react2.default.createElement(\n              'span',\n              { className: 'card-title grey-text text-darken-4' },\n              centers.name,\n              _react2.default.createElement(\n                'i',\n                { className: 'material-icons right' },\n                'close'\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row' },\n              _react2.default.createElement(\n                'p',\n                { style: { float: 'left' } },\n                centers.address,\n                ',',\n                _react2.default.createElement('br', null),\n                centers.city\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              ' This center has a capacity of ',\n              centers.capacity,\n              ' seats ',\n              ' ',\n              'with facilities like ',\n              centers.facility\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nCenterCard.propTypes = {\n  centers: _propTypes2.default.object,\n  name: _propTypes2.default.string,\n  address: _propTypes2.default.string,\n  city: _propTypes2.default.string,\n  facility: _propTypes2.default.string,\n  getAllCenters: _propTypes2.default.func\n};\n\nexports.default = CenterCard;\n\n//# sourceURL=webpack:///./client/src/components/CenterCard.jsx?");

/***/ })

})