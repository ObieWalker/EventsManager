webpackHotUpdate("main",{

/***/ "./client/src/components/AdminDashboard/AdminCenters.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/AdminDashboard/AdminCenters.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _getAllCentersAction = __webpack_require__(/*! ../../actions/getAllCentersAction */ \"./client/src/actions/getAllCentersAction.js\");\n\nvar _getAllCentersAction2 = _interopRequireDefault(_getAllCentersAction);\n\nvar _editCenterAction = __webpack_require__(/*! ../../actions/editCenterAction */ \"./client/src/actions/editCenterAction.js\");\n\nvar _editCenterAction2 = _interopRequireDefault(_editCenterAction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import Search from './Search.jsx';\n// import CenterList from './CenterCard.jsx';\n\nvar AdminCenters = function (_Component) {\n  _inherits(AdminCenters, _Component);\n\n  function AdminCenters(props) {\n    _classCallCheck(this, AdminCenters);\n\n    var _this = _possibleConstructorReturn(this, (AdminCenters.__proto__ || Object.getPrototypeOf(AdminCenters)).call(this, props));\n\n    _this.state = {\n      centers: ''\n    };\n    return _this;\n  }\n\n  _createClass(AdminCenters, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.getAllCenters();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var Centers = this.props.getAllCenters;\n      console.log('===>', this.props.allCenters);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            'All centers and details.'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'center col s12 m6' },\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                null,\n                Centers.length > 0 ? _react2.default.createElement(\n                  'table',\n                  { className: 'table text-center table-hover mx-auto bg-white table-responsive-sm table-striped', style: { width: '900px' } },\n                  _react2.default.createElement(\n                    'thead',\n                    { className: 'text-center text-white bg-info border border-white' },\n                    _react2.default.createElement(\n                      'tr',\n                      { className: 'p-3' },\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        ' S/N'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Center Name'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Address'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'City'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Capacity'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Facilities'\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'tbody',\n                    null,\n                    this.props.allCenters.fetchedAllCenters.map(function (centers, i) {\n                      return _react2.default.createElement(\n                        'tr',\n                        { id: '#1', key: i, index: i, className: 'border border-white' },\n                        _react2.default.createElement(\n                          'td',\n                          { scope: 'row' },\n                          i + 1\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          centers.name\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          centers.address\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          centers.city\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          centers.capacity\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          centers.facility\n                        )\n                      );\n                    })\n                  )\n                ) : _react2.default.createElement(\n                  'p',\n                  { style: { float: 'center' } },\n                  'There are no registered centers.'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return AdminCenters;\n}(_react.Component);\n\nAdminCenters.propTypes = {\n  allCenters: _propTypes2.default.array,\n  getAllCenters: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    allCenters: state.allCenters\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getAllCenters: _getAllCentersAction2.default, editCenter: _editCenterAction2.default }, dispatch);\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminCenters);\n\n//# sourceURL=webpack:///./client/src/components/AdminDashboard/AdminCenters.jsx?");

/***/ })

})