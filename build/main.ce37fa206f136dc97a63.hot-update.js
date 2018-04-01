webpackHotUpdate("main",{

/***/ "./client/src/components/AdminDashboard/ModifyCenterModal.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/AdminDashboard/ModifyCenterModal.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _toastr = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n\nvar _toastr2 = _interopRequireDefault(_toastr);\n\nvar _editCenterAction = __webpack_require__(/*! ../../actions/editCenterAction */ \"./client/src/actions/editCenterAction.js\");\n\nvar _editCenterAction2 = _interopRequireDefault(_editCenterAction);\n\nvar _centerValidator = __webpack_require__(/*! ../../../helpers/validators/centerValidator */ \"./client/helpers/validators/centerValidator.js\");\n\nvar _centerValidator2 = _interopRequireDefault(_centerValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ModifyCenter = function (_Component) {\n  _inherits(ModifyCenter, _Component);\n\n  function ModifyCenter(props) {\n    _classCallCheck(this, ModifyCenter);\n\n    var _this = _possibleConstructorReturn(this, (ModifyCenter.__proto__ || Object.getPrototypeOf(ModifyCenter)).call(this, props));\n\n    _this.state = {\n      name: '',\n      address: '',\n      city: '',\n      capacity: '',\n      facility: '',\n      uploadedImage: {},\n      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',\n      errors: {}\n    };\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.updateCenter = _this.updateCenter.bind(_this);\n    _this.clear = _this.clear.bind(_this);\n    _this.isValid = _this.isValid.bind(_this);\n    return _this;\n  }\n\n  _createClass(ModifyCenter, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var center = this.props.center;\n\n      this.setState({\n        name: center.name,\n        address: center.address,\n        city: center.city,\n        capacity: center.capacity,\n        facility: center.facility,\n        uploadedImage: center.image\n      });\n    }\n  }, {\n    key: 'onChange',\n    value: function onChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'isValid',\n    value: function isValid() {\n      var _validateForm = (0, _centerValidator2.default)(this.state),\n          errors = _validateForm.errors,\n          isValid = _validateForm.isValid;\n\n      if (!isValid) {\n        this.setState({ errors: errors });\n      }\n      return isValid;\n    }\n  }, {\n    key: 'updateCenter',\n    value: function updateCenter(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      if (this.isValid()) {\n        this.setState({ errors: {} });\n        var center = this.state;\n        this.props.editCenterActions(center, this.props.center.id).then(function () {\n          var _props = _this2.props,\n              updateSuccess = _props.updateSuccess,\n              updateError = _props.updateError;\n\n          if (updateError === '') {\n            // clear toasts before showing new\n            _toastr2.default.remove();\n            _toastr2.default.success(updateSuccess);\n          } else {\n            _toastr2.default.remove();\n            _toastr2.default.error(updateError);\n          }\n          _this2.clear();\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'container max-width-six-hundred' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container' },\n            _react2.default.createElement(\n              'h3',\n              { className: 'center-heading' },\n              'Edit a Center'\n            )\n          ),\n          _react2.default.createElement(\n            'form',\n            null,\n            _react2.default.createElement(\n              'div',\n              { className: 'input-field col s12' },\n              _react2.default.createElement(\n                'form',\n                { className: 'col s14', onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Center Name:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    className: 'form-control',\n                    value: this.state.name.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'name',\n                    name: 'name',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Address:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.address.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'address',\n                    className: 'form-control',\n                    name: 'address',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'City:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.city.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'city',\n                    name: 'city',\n                    className: 'form-control',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Capacity:'\n                  ),\n                  _react2.default.createElement('input', { type: 'number',\n                    value: this.state.capacity.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'capacity',\n                    name: 'capacity',\n                    className: 'form-control',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Facilities:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.facility.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'facility',\n                    name: 'facility',\n                    className: 'form-control',\n                    placeholder: 'Separate with commas',\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { type: 'submit', className: 'waves-effect waves-light btn right hoverable indigo' },\n                  _react2.default.createElement(\n                    'i',\n                    { className: 'large material-icons right', 'aria-hidden': 'true' },\n                    ' done'\n                  ),\n                  'Add Center'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row center-align' },\n              _react2.default.createElement(\n                'button',\n                {\n                  className: 'btn waves-effect waves-light navbar-purple round-btn',\n                  type: 'submit', name: 'action',\n                  onClick: this.updateCenter },\n                'Update Center',\n                _react2.default.createElement(\n                  'i',\n                  { className: 'material-icons right' },\n                  'send'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ModifyCenter;\n}(_react.Component);\n\nModifyCenter.propTypes = {\n  getAllCenters: _propTypes2.default.func,\n  center: _propTypes2.default.object,\n  editCenterActions: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isCenterUpdating: state.updateCenter.isCenterCreating,\n    updateSuccess: state.updateCenter.createCenterSuccess,\n    updateError: state.updateCenter.updateCenterError\n  };\n};\n\nfunction mapDispatchToProps(dispatch) {\n  (0, _redux.bindActionCreators)({\n    modifyCenter: _editCenterAction2.default\n  }, dispatch);\n}\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModifyCenter);\n\n//# sourceURL=webpack:///./client/src/components/AdminDashboard/ModifyCenterModal.jsx?");

/***/ })

})