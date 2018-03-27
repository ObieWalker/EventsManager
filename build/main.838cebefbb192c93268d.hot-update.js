webpackHotUpdate("main",{

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ \"./node_modules/material-ui/styles/MuiThemeProvider.js\");\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _App = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _configureStore = __webpack_require__(/*! ./store/configureStore */ \"./client/src/store/configureStore.js\");\n\n__webpack_require__(/*! ./styles/style.scss */ \"./client/src/styles/style.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _configureStore.configureStore)();\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(_App2.default, null)\n), document.getElementById('root'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "./node_modules/material-ui/styles/baseThemes/darkBaseTheme.js":
false,

/***/ "./node_modules/material-ui/styles/index.js":
false,

/***/ "./node_modules/material-ui/styles/muiThemeable.js":
false

})