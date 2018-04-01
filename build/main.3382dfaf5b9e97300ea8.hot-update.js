webpackHotUpdate("main",{

/***/ "./client/helpers/validators/eventValidator.js":
/*!*****************************************************!*\
  !*** ./client/helpers/validators/eventValidator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _validator = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _isEmpty = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n\nvar _isEmpty2 = _interopRequireDefault(_isEmpty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar eventValidator = function eventValidator(data) {\n  var center = data.center,\n      eventType = data.eventType,\n      email = data.email,\n      date = data.date;\n\n  var errors = {};\n\n  console.log(typeof email === 'undefined' ? 'undefined' : _typeof(email));\n  console.log(email);\n\n  if (!_validator2.default.isEmpty(JSON.stringify(center))) {\n    errors.email = 'Please select a center';\n  }\n\n  if (!_validator2.default.isEmpty(JSON.stringify(eventType))) {\n    errors.eventType = 'Please select the type of event';\n  }\n  if (!_validator2.default.isEmpty(email)) {\n    if (!_validator2.default.isEmail(email)) {\n      errors.email = 'Please input a valid email';\n    }\n  } else {\n    errors.email = 'Please enter your email.';\n  }\n  // console.log(date);\n  if (_validator2.default.isEmpty(JSON.stringify(date))) {\n    errors.date = 'Please select a date.';\n  }\n\n  console.log(errors);\n  console.log((0, _isEmpty2.default)(errors));\n  return { errors: errors, formIsValid: (0, _isEmpty2.default)(errors) };\n};\n\nexports.default = eventValidator;\n\n//# sourceURL=webpack:///./client/helpers/validators/eventValidator.js?");

/***/ })

})