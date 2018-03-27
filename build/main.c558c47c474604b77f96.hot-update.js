webpackHotUpdate("main",{

/***/ "./client/src/components/UserDashboard/ModifyEventModal.jsx":
/*!******************************************************************!*\
  !*** ./client/src/components/UserDashboard/ModifyEventModal.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _Modal = __webpack_require__(/*! ./Modal.jsx */ \"./client/src/components/UserDashboard/Modal.jsx\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ModifyEventModal = function (_Component) {\n  _inherits(ModifyEventModal, _Component);\n\n  function ModifyEventModal(props, context) {\n    _classCallCheck(this, ModifyEventModal);\n\n    var _this = _possibleConstructorReturn(this, (ModifyEventModal.__proto__ || Object.getPrototypeOf(ModifyEventModal)).call(this, props, context));\n\n    _this.handleShow = _this.handleShow.bind(_this);\n    _this.handleClose = _this.handleClose.bind(_this);\n\n    _this.state = {\n      show: false\n    };\n    return _this;\n  }\n\n  _createClass(ModifyEventModal, [{\n    key: 'handleClose',\n    value: function handleClose() {\n      this.setState({ show: false });\n    }\n  }, {\n    key: 'handleShow',\n    value: function handleShow() {\n      this.setState({ show: true });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'p',\n          null,\n          'Click to get the full Modal experience!'\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'primary', bsSize: 'large', onClick: this.handleShow },\n          'Launch demo modal'\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Modal,\n          { show: this.state.show, onHide: this.handleClose },\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Header,\n            { closeButton: true },\n            _react2.default.createElement(\n              _reactBootstrap.Modal.Title,\n              null,\n              'Modal heading1'\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Body,\n            null,\n            _react2.default.createElement(\n              'h4',\n              null,\n              'test'\n            ),\n            _react2.default.createElement(_Modal2.default, null)\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Footer,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.Button,\n              { onClick: this.handleClose },\n              'Close'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ModifyEventModal;\n}(_react.Component);\n\nexports.default = ModifyEventModal;\n\n//# sourceURL=webpack:///./client/src/components/UserDashboard/ModifyEventModal.jsx?");

/***/ })

})