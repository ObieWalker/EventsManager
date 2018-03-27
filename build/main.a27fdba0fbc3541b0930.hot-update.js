webpackHotUpdate("main",{

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"./node_modules/material-ui/styles/index.js\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _App = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _configureStore = __webpack_require__(/*! ./store/configureStore */ \"./client/src/store/configureStore.js\");\n\n__webpack_require__(/*! ./styles/style.scss */ \"./client/src/styles/style.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _configureStore.configureStore)();\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(_App2.default, null)\n), document.getElementById('root'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "./node_modules/material-ui/styles/baseThemes/darkBaseTheme.js":
/*!*********************************************************************!*\
  !*** ./node_modules/material-ui/styles/baseThemes/darkBaseTheme.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _colors = __webpack_require__(/*! ../colors */ \"./node_modules/material-ui/styles/colors.js\");\n\nvar _colorManipulator = __webpack_require__(/*! ../../utils/colorManipulator */ \"./node_modules/material-ui/utils/colorManipulator.js\");\n\nvar _spacing = __webpack_require__(/*! ../spacing */ \"./node_modules/material-ui/styles/spacing.js\");\n\nvar _spacing2 = _interopRequireDefault(_spacing);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.default = {\n  spacing: _spacing2.default,\n  fontFamily: 'Roboto, sans-serif',\n  borderRadius: 2,\n  palette: {\n    primary1Color: _colors.cyan700,\n    primary2Color: _colors.cyan700,\n    primary3Color: _colors.grey600,\n    accent1Color: _colors.pinkA200,\n    accent2Color: _colors.pinkA400,\n    accent3Color: _colors.pinkA100,\n    textColor: _colors.fullWhite,\n    secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),\n    alternateTextColor: '#303030',\n    canvasColor: '#303030',\n    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),\n    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),\n    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),\n    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/material-ui/styles/baseThemes/darkBaseTheme.js?");

/***/ }),

/***/ "./node_modules/material-ui/styles/index.js":
/*!**************************************************!*\
  !*** ./node_modules/material-ui/styles/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.zIndex = exports.typography = exports.transitions = exports.spacing = exports.muiThemeable = exports.getMuiTheme = exports.LightRawTheme = exports.lightBaseTheme = exports.DarkRawTheme = exports.darkBaseTheme = exports.colors = exports.MuiThemeProvider = undefined;\n\nvar _MuiThemeProvider2 = __webpack_require__(/*! ./MuiThemeProvider */ \"./node_modules/material-ui/styles/MuiThemeProvider.js\");\n\nvar _MuiThemeProvider3 = _interopRequireDefault(_MuiThemeProvider2);\n\nvar _colors2 = __webpack_require__(/*! ./colors */ \"./node_modules/material-ui/styles/colors.js\");\n\nvar _colors = _interopRequireWildcard(_colors2);\n\nvar _darkBaseTheme2 = __webpack_require__(/*! ./baseThemes/darkBaseTheme */ \"./node_modules/material-ui/styles/baseThemes/darkBaseTheme.js\");\n\nvar _darkBaseTheme3 = _interopRequireDefault(_darkBaseTheme2);\n\nvar _lightBaseTheme2 = __webpack_require__(/*! ./baseThemes/lightBaseTheme */ \"./node_modules/material-ui/styles/baseThemes/lightBaseTheme.js\");\n\nvar _lightBaseTheme3 = _interopRequireDefault(_lightBaseTheme2);\n\nvar _getMuiTheme2 = __webpack_require__(/*! ./getMuiTheme */ \"./node_modules/material-ui/styles/getMuiTheme.js\");\n\nvar _getMuiTheme3 = _interopRequireDefault(_getMuiTheme2);\n\nvar _muiThemeable2 = __webpack_require__(/*! ./muiThemeable */ \"./node_modules/material-ui/styles/muiThemeable.js\");\n\nvar _muiThemeable3 = _interopRequireDefault(_muiThemeable2);\n\nvar _spacing2 = __webpack_require__(/*! ./spacing */ \"./node_modules/material-ui/styles/spacing.js\");\n\nvar _spacing3 = _interopRequireDefault(_spacing2);\n\nvar _transitions2 = __webpack_require__(/*! ./transitions */ \"./node_modules/material-ui/styles/transitions.js\");\n\nvar _transitions3 = _interopRequireDefault(_transitions2);\n\nvar _typography2 = __webpack_require__(/*! ./typography */ \"./node_modules/material-ui/styles/typography.js\");\n\nvar _typography3 = _interopRequireDefault(_typography2);\n\nvar _zIndex2 = __webpack_require__(/*! ./zIndex */ \"./node_modules/material-ui/styles/zIndex.js\");\n\nvar _zIndex3 = _interopRequireDefault(_zIndex2);\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }newObj.default = obj;return newObj;\n  }\n}\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.MuiThemeProvider = _MuiThemeProvider3.default;\nexports.colors = _colors;\nexports.darkBaseTheme = _darkBaseTheme3.default;\nexports.DarkRawTheme = _darkBaseTheme3.default;\nexports.lightBaseTheme = _lightBaseTheme3.default;\nexports.LightRawTheme = _lightBaseTheme3.default;\nexports.getMuiTheme = _getMuiTheme3.default;\nexports.muiThemeable = _muiThemeable3.default;\nexports.spacing = _spacing3.default;\nexports.transitions = _transitions3.default;\nexports.typography = _typography3.default;\nexports.zIndex = _zIndex3.default;\n\n//# sourceURL=webpack:///./node_modules/material-ui/styles/index.js?");

/***/ }),

/***/ "./node_modules/material-ui/styles/muiThemeable.js":
/*!*********************************************************!*\
  !*** ./node_modules/material-ui/styles/muiThemeable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nexports.default = muiThemeable;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _getMuiTheme = __webpack_require__(/*! ./getMuiTheme */ \"./node_modules/material-ui/styles/getMuiTheme.js\");\n\nvar _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar DEFAULT_THEME = void 0;\n\nfunction getDefaultTheme() {\n  if (!DEFAULT_THEME) {\n    DEFAULT_THEME = (0, _getMuiTheme2.default)();\n  }\n  return DEFAULT_THEME;\n}\n\nfunction muiThemeable() {\n  return function (Component) {\n    var MuiComponent = function MuiComponent(props, context) {\n      var _context$muiTheme = context.muiTheme,\n          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;\n\n      return _react2.default.createElement(Component, (0, _extends3.default)({ muiTheme: muiTheme }, props));\n    };\n\n    MuiComponent.contextTypes = {\n      muiTheme: _propTypes2.default.object.isRequired\n    };\n\n    return MuiComponent;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/material-ui/styles/muiThemeable.js?");

/***/ })

})