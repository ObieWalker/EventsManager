webpackHotUpdate("main",{

/***/ "./client/src/components/UserDashboard/BookCenter.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/UserDashboard/BookCenter.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _toastr = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n\nvar _toastr2 = _interopRequireDefault(_toastr);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _reactBootstrapSlider = __webpack_require__(/*! react-bootstrap-slider */ \"./node_modules/react-bootstrap-slider/dist/react-bootstrap-slider.js\");\n\nvar _reactBootstrapSlider2 = _interopRequireDefault(_reactBootstrapSlider);\n\nvar _addEventAction = __webpack_require__(/*! ../../actions/addEventAction */ \"./client/src/actions/addEventAction.js\");\n\nvar _addEventAction2 = _interopRequireDefault(_addEventAction);\n\nvar _getAllCentersAction = __webpack_require__(/*! ../../actions/getAllCentersAction */ \"./client/src/actions/getAllCentersAction.js\");\n\nvar _getAllCentersAction2 = _interopRequireDefault(_getAllCentersAction);\n\nvar _eventValidator = __webpack_require__(/*! ../../../helpers/validators/eventValidator */ \"./client/helpers/validators/eventValidator.js\");\n\nvar _eventValidator2 = _interopRequireDefault(_eventValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BookCenter = function (_Component) {\n  _inherits(BookCenter, _Component);\n\n  function BookCenter(props) {\n    _classCallCheck(this, BookCenter);\n\n    var _this = _possibleConstructorReturn(this, (BookCenter.__proto__ || Object.getPrototypeOf(BookCenter)).call(this, props));\n\n    _this.state = {\n      center: '',\n      eventType: '',\n      date: '',\n      guestNo: '',\n      email: '',\n      errors: {},\n      max: 100000,\n      min: 3,\n      step: 5\n    };\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.formIsValid = _this.formIsValid.bind(_this);\n    _this.handleOnFocus = _this.handleOnFocus.bind(_this);\n    _this.onSubmit = _this.onSubmit.bind(_this);\n    _this.clear = _this.clear.bind(_this);\n    return _this;\n  }\n\n  _createClass(BookCenter, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.allCenters();\n      console.log(this.props.allCenters);\n\n      $('.datepicker').pickadate({\n        selectMonths: true, // Creates a dropdown to control month\n        selectYears: 15, // Creates a dropdown of 15 years to control year,\n        today: 'Today',\n        clear: 'Clear',\n        close: 'Ok',\n        closeOnSelect: true, // Close upon selecting a date,\n        onSet: this.handleDateChange\n      });\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(e) {\n      this.setState(_defineProperty({}, e.target.name, e.target.value));\n    }\n  }, {\n    key: 'handleDateChange',\n    value: function handleDateChange(e) {\n      this.setState({\n        date: Object.assign({}, this.state.date, { value: (0, _moment2.default)(e.select).format('LL') })\n      });\n    }\n  }, {\n    key: 'handleOnFocus',\n    value: function handleOnFocus(e) {\n      this.setState({\n        errors: Object.assign({}, this.state.errors, _defineProperty({}, e.target.name, ''))\n      });\n    }\n  }, {\n    key: 'clear',\n    value: function clear() {\n      this.setState({\n        center: '',\n        eventType: '',\n        date: '',\n        guestNo: '',\n        email: '',\n        errors: {}\n      });\n    }\n  }, {\n    key: 'formIsValid',\n    value: function formIsValid() {\n      var _validateForm = (0, _eventValidator2.default)(this.state),\n          errors = _validateForm.errors,\n          formIsValid = _validateForm.formIsValid;\n\n      if (!formIsValid) {\n        console.log('not valid');\n        this.setState({ errors: errors });\n      }\n      return formIsValid;\n    }\n  }, {\n    key: 'onSubmit',\n    value: function onSubmit(e) {\n      var _this2 = this;\n\n      console.log('onsubmit');\n      e.preventDefault();\n      if (this.formIsValid()) {\n        console.log('is valid');\n        this.setState({ errors: {} });\n        console.log(this.state);\n        var eventDetails = {\n          center: this.state.center,\n          eventType: this.state.eventType,\n          date: this.state.date,\n          guestNo: this.state.guestNo,\n          email: this.state.email\n        };\n        this.props.addEventAction(eventDetails).then(function () {\n          console.log('create event');\n          console.log(_this2.props);\n          var _props = _this2.props,\n              createSuccess = _props.createSuccess,\n              createError = _props.createError;\n\n          if (createError === '') {\n            _toastr2.default.remove();\n            _toastr2.default.success(createSuccess);\n          } else {\n            _toastr2.default.remove();\n            _toastr2.default.error(createError);\n          }\n          $('button[id=close]').click();\n          _this2.clear();\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // const centers = this.props;\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'container', style: { width: '100%' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'grey lighten-4', style: {\n                display: 'inline-block', width: '100%', padding: '10%', border: '1px solid #EEE'\n              } },\n            _react2.default.createElement(\n              'div',\n              { className: 'row' },\n              _react2.default.createElement(\n                'div',\n                { className: 'nav-wrapper' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col s12' },\n                  _react2.default.createElement(\n                    'h3',\n                    { className: 'brand-logo col s12' },\n                    'Booking Information'\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'input-field col s12' },\n              _react2.default.createElement(\n                'form',\n                { className: 'col s14' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'select',\n                    {\n                      name: 'eventType',\n                      value: this.state.eventType.value,\n                      onChange: this.handleChange,\n                      className: 'form-control',\n                      id: 'type' },\n                    _react2.default.createElement(\n                      'option',\n                      { value: '', disabled: true },\n                      'Choose your option'\n                    ),\n                    _react2.default.createElement(\n                      'option',\n                      { value: '1' },\n                      'Wedding'\n                    ),\n                    _react2.default.createElement(\n                      'option',\n                      { value: '2' },\n                      'Party'\n                    ),\n                    _react2.default.createElement(\n                      'option',\n                      { value: '3' },\n                      'Conference'\n                    ),\n                    _react2.default.createElement(\n                      'option',\n                      { value: '4' },\n                      'Ceremony'\n                    ),\n                    _react2.default.createElement(\n                      'option',\n                      { value: '5' },\n                      'Other'\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'row' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'input-field col s12' },\n                    _react2.default.createElement('input', {\n                      name: 'date',\n                      value: this.state.date.value,\n                      type: 'text',\n                      className: 'datepicker',\n                      id: 'event-date'\n                    })\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement(_reactBootstrapSlider2.default, {\n                    value: this.state.currentValue,\n                    change: this.changeValue,\n                    slideStop: this.changeValue,\n                    step: this.state.step,\n                    max: this.state.max,\n                    min: this.state.min,\n                    orientation: 'vertical',\n                    reversed: true,\n                    disabled: 'disabled' })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'input-field col s12' },\n                  _react2.default.createElement(\n                    'i',\n                    { className: 'material-icons prefix' },\n                    'contacts'\n                  ),\n                  _react2.default.createElement('input', {\n                    className: 'validate',\n                    value: this.state.email.value,\n                    error: this.state.errors.email,\n                    onFocus: this.state.handleOnFocus,\n                    type: 'email',\n                    name: 'email',\n                    id: 'email',\n                    onChange: this.handleChange }),\n                  _react2.default.createElement(\n                    'label',\n                    { htmlFor: 'email' },\n                    'Enter a contact email.'\n                  )\n                ),\n                _react2.default.createElement(\n                  'button',\n                  { type: 'submit', className: 'waves-effect waves-light btn right hoverable indigo' },\n                  _react2.default.createElement(\n                    'i',\n                    { className: 'large material-icons right', 'aria-hidden': 'true' },\n                    ' done'\n                  ),\n                  'Make Booking'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return BookCenter;\n}(_react.Component);\n\nBookCenter.propTypes = {\n  allCenters: _propTypes2.default.array,\n  getAllCenters: _propTypes2.default.func.isRequired,\n  createSuccess: _propTypes2.default.func,\n  createError: _propTypes2.default.func,\n  addEventAction: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    allCenters: state.allCenters,\n    eventState: state.eventState\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    allCenters: _getAllCentersAction2.default,\n    addNewEvent: _addEventAction2.default\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookCenter);\n\n//# sourceURL=webpack:///./client/src/components/UserDashboard/BookCenter.jsx?");

/***/ })

})