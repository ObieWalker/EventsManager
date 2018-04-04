webpackHotUpdate("main",{

/***/ "./client/src/reducers/rootReducer.js":
/*!********************************************!*\
  !*** ./client/src/reducers/rootReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _registerReducer = __webpack_require__(/*! ./registerReducer */ \"./client/src/reducers/registerReducer.js\");\n\nvar _registerReducer2 = _interopRequireDefault(_registerReducer);\n\nvar _loginReducer = __webpack_require__(/*! ./loginReducer */ \"./client/src/reducers/loginReducer.js\");\n\nvar _loginReducer2 = _interopRequireDefault(_loginReducer);\n\nvar _createCenterReducer = __webpack_require__(/*! ./createCenterReducer */ \"./client/src/reducers/createCenterReducer.js\");\n\nvar _createCenterReducer2 = _interopRequireDefault(_createCenterReducer);\n\nvar _updateCenterReducer = __webpack_require__(/*! ./updateCenterReducer.js */ \"./client/src/reducers/updateCenterReducer.js\");\n\nvar _updateCenterReducer2 = _interopRequireDefault(_updateCenterReducer);\n\nvar _allCentersReducer = __webpack_require__(/*! ./allCentersReducer */ \"./client/src/reducers/allCentersReducer.js\");\n\nvar _allCentersReducer2 = _interopRequireDefault(_allCentersReducer);\n\nvar _userEventsReducer = __webpack_require__(/*! ./userEventsReducer */ \"./client/src/reducers/userEventsReducer.js\");\n\nvar _userEventsReducer2 = _interopRequireDefault(_userEventsReducer);\n\nvar _editCenterReducer = __webpack_require__(/*! ./editCenterReducer */ \"./client/src/reducers/editCenterReducer.js\");\n\nvar _editCenterReducer2 = _interopRequireDefault(_editCenterReducer);\n\nvar _deleteCenterReducer = __webpack_require__(/*! ./deleteCenterReducer */ \"./client/src/reducers/deleteCenterReducer.js\");\n\nvar _deleteCenterReducer2 = _interopRequireDefault(_deleteCenterReducer);\n\nvar _allEventsReducer = __webpack_require__(/*! ./allEventsReducer */ \"./client/src/reducers/allEventsReducer.js\");\n\nvar _allEventsReducer2 = _interopRequireDefault(_allEventsReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n  registerUser: _registerReducer2.default,\n  loginUser: _loginReducer2.default,\n  createCenter: _createCenterReducer2.default,\n  allCenters: _allCentersReducer2.default,\n  allEvents: _allEventsReducer2.default,\n  userEvents: _userEventsReducer2.default,\n  deleteCenter: _deleteCenterReducer2.default,\n  editCenter: _editCenterReducer2.default\n});\n// import events from './eventReducer';\n// import centerReducer from './centerReducer';\n// import singleCenter from './singleCenterReducer'\nexports.default = rootReducer;\n\n//# sourceURL=webpack:///./client/src/reducers/rootReducer.js?");

/***/ }),

/***/ "./client/src/reducers/updateCenterReducer.js":
/*!****************************************************!*\
  !*** ./client/src/reducers/updateCenterReducer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ \"./client/src/actions/actionTypes.js\");\n\nvar initialState = {\n  isCenterUpdating: false,\n  updateCenterError: '',\n  updateCenterSuccess: ''\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actionTypes.IS_CENTER_UPDATING:\n      return Object.assign({}, state, { isCenterUpdating: action.bool });\n    case _actionTypes.UPDATE_CENTER_SUCCESS:\n      return Object.assign({}, state, { updateCenterSuccess: action.message });\n    case _actionTypes.UPDATE_CENTER_FAILURE:\n      return Object.assign({}, state, { updateCenterError: action.error });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/reducers/updateCenterReducer.js?");

/***/ })

})