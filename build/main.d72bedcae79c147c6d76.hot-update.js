webpackHotUpdate("main",{

/***/ "./client/helpers/validators/eventValidator.js":
/*!*****************************************************!*\
  !*** ./client/helpers/validators/eventValidator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _validator = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _isEmpty = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n\nvar _isEmpty2 = _interopRequireDefault(_isEmpty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar eventValidator = function eventValidator(data) {\n  var email = data.email;\n\n  var errors = {};\n\n  if (!_validator2.default.isEmail(email)) {\n    errors.email = 'Please input a valid email';\n  }\n\n  console.log(errors);\n  console.log((0, _isEmpty2.default)(errors));\n  return { errors: errors, formIsValid: (0, _isEmpty2.default)(errors) };\n};\n\nexports.default = eventValidator;\n\n//# sourceURL=webpack:///./client/helpers/validators/eventValidator.js?");

/***/ })

})