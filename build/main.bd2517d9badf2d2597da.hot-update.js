webpackHotUpdate("main",{

/***/ "./client/src/reducers/allCentersReducer.js":
/*!**************************************************!*\
  !*** ./client/src/reducers/allCentersReducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ \"./client/src/actions/actionTypes.js\");\n\nvar initialState = {\n  isCentersFetching: false,\n  fetchedCenters: [],\n  allCentersError: ''\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _actionTypes.IS_CENTERS_FETCHING:\n      return Object.assign({}, state, { isCentersFetching: action.bool });\n    case _actionTypes.FETCH_CENTERS_SUCCESS:\n      console.log(action.centers);\n      return Object.assign({}, state, {\n        fetchedCenters: action.centers\n      });\n    case _actionTypes.FETCH_CENTERS_FAILURE:\n      return Object.assign({}, state, {\n        allCentersError: action.error,\n        fetchedCenters: []\n      });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/src/reducers/allCentersReducer.js?");

/***/ })

})