webpackHotUpdate("main",{

/***/ "./client/src/actions/addEventAction.js":
/*!**********************************************!*\
  !*** ./client/src/actions/addEventAction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./client/src/actions/actionTypes.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isEventCreating = function isEventCreating(bool) {\n  return {\n    type: _actionTypes.IS_EVENT_CREATING,\n    bool: bool\n  };\n};\n\nvar createEventSuccess = function createEventSuccess(event, message) {\n  return {\n    type: _actionTypes.CREATE_EVENT_SUCCESS,\n    event: event,\n    message: message\n  };\n};\n\nvar createEventFailure = function createEventFailure(error) {\n  return {\n    type: _actionTypes.CREATE_EVENT_FAILURE,\n    error: error\n  };\n};\n\nvar addEvent = function addEvent(eventDetails) {\n  return function (dispatch) {\n    localStorage.getItem('jwtToken');\n    if (_axios2.default.defaults.headers.common.token === '') {\n      _axios2.default.defaults.headers.common.token = localStorage.getItem('jwtToken');\n    }\n    return (0, _axios2.default)({\n      method: 'POST',\n      url: '/api/v1/events',\n      headers: {\n        token: localStorage.getItem('jwtToken')\n      },\n      data: eventDetails\n    }).then(function (response) {\n      console.log('=======>', response);\n      var message = response.eventInfo.message;\n\n      console.log(response.info);\n      dispatch(createEventSuccess(response.eventInfo.event, message));\n      dispatch(isEventCreating(false));\n    }).catch(function (error) {\n      dispatch(createEventFailure(error.response.eventInfo.message));\n      dispatch(isEventCreating(false));\n    });\n  };\n};\n\nvar createEventRequest = function createEventRequest(event) {\n  return function (dispatch) {\n    dispatch(isEventCreating(true));\n    console.log('add event');\n    return dispatch(addEvent(event));\n  };\n};\nexports.default = createEventRequest;\n\n//# sourceURL=webpack:///./client/src/actions/addEventAction.js?");

/***/ })

})