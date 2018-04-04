webpackHotUpdate("main",{

/***/ "./client/src/components/Login.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Login.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _toastr = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n\nvar _toastr2 = _interopRequireDefault(_toastr);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _signIn = __webpack_require__(/*! ../../helpers/validators/signIn */ \"./client/helpers/validators/signIn.js\");\n\nvar _signIn2 = _interopRequireDefault(_signIn);\n\nvar _UserSessionAction = __webpack_require__(/*! ../actions/UserSessionAction */ \"./client/src/actions/UserSessionAction.js\");\n\nvar _UserSessionAction2 = _interopRequireDefault(_UserSessionAction);\n\nvar _verifyToken = __webpack_require__(/*! ../../helpers/verifyToken */ \"./client/helpers/verifyToken.js\");\n\nvar _verifyToken2 = _interopRequireDefault(_verifyToken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n *\n *\n * @class Login\n * @extends {Component}\n */\nvar Login = function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = {\n      email: '',\n      password: '',\n      isLoading: false,\n      showWarning: false,\n      errors: {}\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleUserLogin = _this.handleUserLogin.bind(_this);\n    _this.handleOnFocus = _this.handleOnFocus.bind(_this);\n    _this.isValid = _this.isValid.bind(_this);\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'handleChange',\n    value: function handleChange(e) {\n      this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // checks to see if user already has a verified token and redirects\n      if ((0, _verifyToken2.default)()) {\n        this.props.history.push('/');\n        // this.context.router.history.push('/contactus');\n      }\n    }\n  }, {\n    key: 'isValid',\n    value: function isValid() {\n      var _signInValidator = (0, _signIn2.default)(this.state),\n          errors = _signInValidator.errors,\n          isValid = _signInValidator.isValid;\n\n      if (!isValid) {\n        this.setState({ errors: errors });\n        console.log(errors);\n      }\n      return isValid;\n    }\n    // show error when focused\n\n  }, {\n    key: 'handleOnFocus',\n    value: function handleOnFocus(event) {\n      var _Object$assign;\n\n      this.setState({\n        errors: Object.assign({}, this.state.errors, (_Object$assign = {}, _defineProperty(_Object$assign, event.target.name, ''), _defineProperty(_Object$assign, 'form', ''), _Object$assign))\n      });\n    }\n  }, {\n    key: 'handleUserLogin',\n    value: function handleUserLogin(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      console.log('first');\n      var userDetails = {\n        email: this.state.email,\n        password: this.state.password\n      };\n      if (this.isValid()) {\n        console.log('it is valid');\n        this.setState({ errors: {} });\n        this.props.login(userDetails).then(function () {\n          var isAuthenticated = _this2.props.loginUser.isAuthenticated;\n\n          console.log('is it authenticated?', isAuthenticated);\n          if (isAuthenticated) {\n            console.log('my props = ', _this2.props);\n            _this2.props.history.push('/dashboard');\n            _toastr2.default.success('welcome back');\n          }\n        }).catch(function (error) {\n          return console.log(error);\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h5',\n          { style: { fontFamily: 'serif', marginTop: '5%' } },\n          'Sign in to your account. '\n        ),\n        _react2.default.createElement('br', null),\n        ' ',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'div',\n          { style: { width: '40%', margin: '0 30%' } },\n          _react2.default.createElement(\n            'form',\n            { className: 'col s12' },\n            _react2.default.createElement(\n              'div',\n              { className: 'row' },\n              _react2.default.createElement(\n                'div',\n                { className: 'input-field col s12' },\n                _react2.default.createElement(\n                  'i',\n                  { className: 'material-icons prefix' },\n                  'contacts'\n                ),\n                _react2.default.createElement('input', {\n                  className: 'validate',\n                  value: this.state.email.value,\n                  error: this.state.errors.email,\n                  onFocus: this.state.handleOnFocus,\n                  type: 'email',\n                  name: 'email',\n                  id: 'email',\n                  onChange: this.handleChange }),\n                _react2.default.createElement(\n                  'label',\n                  { htmlFor: 'email' },\n                  'Enter your email'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row' },\n              _react2.default.createElement(\n                'div',\n                { className: 'input-field col s12' },\n                _react2.default.createElement(\n                  'i',\n                  { className: 'material-icons prefix' },\n                  'vpn_key'\n                ),\n                _react2.default.createElement('input', {\n                  className: 'validate',\n                  value: this.state.password.value,\n                  onFocus: this.state.handleOnFocus,\n                  type: 'password',\n                  name: 'password',\n                  id: 'password',\n                  onChange: this.handleChange }),\n                _react2.default.createElement(\n                  'label',\n                  { htmlFor: 'password' },\n                  'Enter your password'\n                )\n              ),\n              this.state.errors.password && _react2.default.createElement(\n                'span',\n                null,\n                this.state.errors.password\n              ),\n              _react2.default.createElement(\n                'label',\n                { style: { float: 'right' } },\n                _react2.default.createElement(\n                  'a',\n                  { className: 'red-text darken-3', href: '#!' },\n                  _react2.default.createElement(\n                    'b',\n                    null,\n                    'Forgot Password?'\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'center',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                  'button',\n                  { type: 'submit',\n                    name: 'btn_login',\n                    className: 'col s3 btn btn-large waves-effect indigo right',\n                    onClick: this.handleUserLogin },\n                  'Login'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react.Component);\n\nLogin.propTypes = {\n  UserSessionAction: _propTypes2.default.func,\n  router: _propTypes2.default.object,\n  history: _propTypes2.default.object,\n  loginUser: _propTypes2.default.object,\n  login: _propTypes2.default.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginUser: state.loginUser\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    login: _UserSessionAction2.default\n  }, dispatch);\n};\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login));\n\n//# sourceURL=webpack:///./client/src/components/Login.jsx?");

/***/ })

})