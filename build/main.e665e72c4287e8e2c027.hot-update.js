webpackHotUpdate("main",{

/***/ "./client/src/components/AdminDashboard/CreateCenter.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/AdminDashboard/CreateCenter.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _toastr = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n\nvar _toastr2 = _interopRequireDefault(_toastr);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _validateImage = __webpack_require__(/*! ../../../helpers/validators/validateImage */ \"./client/helpers/validators/validateImage.js\");\n\nvar _validateImage2 = _interopRequireDefault(_validateImage);\n\nvar _centerValidator = __webpack_require__(/*! ../../../helpers/validators/centerValidator */ \"./client/helpers/validators/centerValidator.js\");\n\nvar _centerValidator2 = _interopRequireDefault(_centerValidator);\n\nvar _addCenterAction = __webpack_require__(/*! ../../actions/addCenterAction */ \"./client/src/actions/addCenterAction.js\");\n\nvar _addCenterAction2 = _interopRequireDefault(_addCenterAction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import success from '../../actions/'\n\n\nvar CreateCenter = function (_Component) {\n  _inherits(CreateCenter, _Component);\n\n  function CreateCenter(props) {\n    _classCallCheck(this, CreateCenter);\n\n    var _this = _possibleConstructorReturn(this, (CreateCenter.__proto__ || Object.getPrototypeOf(CreateCenter)).call(this, props));\n\n    _this.state = {\n      name: '',\n      address: '',\n      city: '',\n      capacity: '',\n      facility: '',\n      uploadedImage: {},\n      defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',\n      errors: {}\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.formIsValid = _this.formIsValid.bind(_this);\n    _this.handleOnFocus = _this.handleOnFocus.bind(_this);\n    _this.handleImage = _this.handleImage.bind(_this);\n    _this.onSubmit = _this.onSubmit.bind(_this);\n    _this.clear = _this.clear.bind(_this);\n    return _this;\n  }\n\n  _createClass(CreateCenter, [{\n    key: 'handleChange',\n    value: function handleChange(e) {\n      this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }\n  }, {\n    key: 'handleOnFocus',\n    value: function handleOnFocus(e) {\n      this.setState({\n        errors: Object.assign({}, this.state.errors, _defineProperty({}, e.target.name, ''))\n      });\n    }\n  }, {\n    key: 'handleImage',\n    value: function handleImage(event) {\n      var _this2 = this;\n\n      if (event.target.files && event.target.files[0]) {\n        var file = event.target.files[0];\n        var filereader = new FileReader();\n        (0, _validateImage2.default)(filereader, file, function (fileType) {\n          if (fileType === 'image/png' || fileType === 'image/gif' || fileType === 'image/jpeg') {\n            _this2.setState({ uploadedImage: file });\n            filereader.onload = function (e) {\n              _this2.setState({ imageSrc: e.target.result });\n            };\n            filereader.readAsDataURL(file);\n          } else {\n            _toastr2.default.clear();\n            _toastr2.default.error('please provide a valid image file');\n          }\n        });\n      } else {\n        this.setState({ defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg', uploadedImage: '' });\n      }\n    }\n  }, {\n    key: 'clear',\n    value: function clear() {\n      this.setState({\n        name: '',\n        address: '',\n        city: '',\n        capacity: '',\n        facility: '',\n        uploadedImage: {},\n        defaultImageUrl: 'http://i68.tinypic.com/dh5vk.jpg',\n        errors: {}\n      });\n    }\n  }, {\n    key: 'formIsValid',\n    value: function formIsValid() {\n      var _validateForm = (0, _centerValidator2.default)(this.state),\n          errors = _validateForm.errors,\n          formIsValid = _validateForm.formIsValid;\n\n      if (!formIsValid) {\n        console.log('not valid');\n        this.setState({ errors: errors });\n      }\n      return formIsValid;\n    }\n  }, {\n    key: 'onSubmit',\n    value: function onSubmit(e) {\n      var _this3 = this;\n\n      console.log('onsubmit');\n      e.preventDefault();\n      if (this.formIsValid()) {\n        console.log('is valid');\n        this.setState({ errors: {} });\n        console.log(this.state);\n        var centerDetails = {\n          name: this.state.name,\n          address: this.state.address,\n          city: this.state.city,\n          capacity: this.state.capacity,\n          facility: this.state.facility\n        };\n        this.props.createCenter(centerDetails).then(function () {\n          console.log('create center');\n          var _props = _this3.props,\n              createSuccess = _props.createSuccess,\n              createError = _props.createError;\n\n          console.log(createSuccess);\n          if (createError === '') {\n            // clear toasts before showing new\n            _toastr2.default.remove();\n            _toastr2.default.success(createSuccess);\n          } else {\n            _toastr2.default.remove();\n            _toastr2.default.error(createError);\n          }\n          _this3.clear();\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'col-lg-8 col-xs-12 col-centered' },\n          _react2.default.createElement(\n            'div',\n            { className: 'grey lighten-4', style: {\n                display: 'inline-block', width: '100%', margin: '50px 20px 20px 50px', padding: '10%', border: '1px solid #EEE'\n              } },\n            _react2.default.createElement(\n              'div',\n              { className: 'row' },\n              _react2.default.createElement(\n                'div',\n                { className: 'nav-wrapper' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-lg-12 col-xs-12 col-centered' },\n                  _react2.default.createElement(\n                    'h3',\n                    { className: 'brand-logo col s12' },\n                    'Add A Center'\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'input-field col s12' },\n              _react2.default.createElement(\n                'form',\n                { className: 'col s14', onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Center Name:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    className: 'form-control',\n                    value: this.state.name.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'name',\n                    name: 'name',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Address:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.address.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'address',\n                    className: 'form-control',\n                    name: 'address',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'City:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.city.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'city',\n                    name: 'city',\n                    className: 'form-control',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Capacity:'\n                  ),\n                  _react2.default.createElement('input', { type: 'number',\n                    value: this.state.capacity.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'capacity',\n                    name: 'capacity',\n                    className: 'form-control',\n                    placeholder: '', required: true,\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'label',\n                    null,\n                    'Facilities:'\n                  ),\n                  _react2.default.createElement('input', { type: 'text',\n                    value: this.state.facility.value,\n                    onFocus: this.state.handleOnFocus,\n                    id: 'facility',\n                    name: 'facility',\n                    className: 'form-control',\n                    placeholder: 'Separate with commas',\n                    onChange: this.handleChange })\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { type: 'submit', className: 'waves-effect waves-light btn right hoverable indigo' },\n                  _react2.default.createElement(\n                    'i',\n                    { className: 'large material-icons right', 'aria-hidden': 'true' },\n                    ' done'\n                  ),\n                  'Add Center'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CreateCenter;\n}(_react.Component);\n\nCreateCenter.propTypes = {\n  createCenter: _propTypes2.default.func,\n  createSuccess: _propTypes2.default.string,\n  createError: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isCenterCreating: state.createCenter.isCenterCreating,\n    createSuccess: state.createCenter.createCenterSuccess,\n    createError: state.createCenter.createCenterError\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    createCenter: _addCenterAction2.default\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateCenter);\n\n//# sourceURL=webpack:///./client/src/components/AdminDashboard/CreateCenter.jsx?");

/***/ })

})