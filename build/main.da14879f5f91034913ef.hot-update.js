webpackHotUpdate("main",{

/***/ "./client/src/components/AdminDashboard/AdminCenters.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/AdminDashboard/AdminCenters.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/es/index.js\");\n\nvar _getAllCentersAction = __webpack_require__(/*! ../../actions/getAllCentersAction */ \"./client/src/actions/getAllCentersAction.js\");\n\nvar _getAllCentersAction2 = _interopRequireDefault(_getAllCentersAction);\n\nvar _editCenterAction = __webpack_require__(/*! ../../actions/editCenterAction */ \"./client/src/actions/editCenterAction.js\");\n\nvar _editCenterAction2 = _interopRequireDefault(_editCenterAction);\n\nvar _ModifyCenterModal = __webpack_require__(/*! ./ModifyCenterModal.jsx */ \"./client/src/components/AdminDashboard/ModifyCenterModal.jsx\");\n\nvar _ModifyCenterModal2 = _interopRequireDefault(_ModifyCenterModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import Search from './Search.jsx';\n// import CenterList from './CenterCard.jsx';\n\nvar AdminCenters = function (_Component) {\n  _inherits(AdminCenters, _Component);\n\n  function AdminCenters(props) {\n    _classCallCheck(this, AdminCenters);\n\n    var _this = _possibleConstructorReturn(this, (AdminCenters.__proto__ || Object.getPrototypeOf(AdminCenters)).call(this, props));\n\n    _this.state = {\n      center: '',\n      show: false\n    };\n\n    _this.handleDelete = _this.handleDelete.bind(_this);\n    _this.handleModify = _this.handleModify.bind(_this);\n    _this.handleClose = _this.handleClose.bind(_this);\n    return _this;\n  }\n\n  _createClass(AdminCenters, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.getAllCenters();\n    }\n  }, {\n    key: 'handleClose',\n    value: function handleClose() {\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: 'handleModify',\n    value: function handleModify(e) {\n      e.preventDefault();\n\n      this.setState({\n        show: true\n      });\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var Centers = this.props.getAllCenters;\n      console.log('in admin centers===>', this.props.allCenters);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            { className: 'center col s12 m12' },\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                null,\n                this.props.allCenters.fetchedCenters ? _react2.default.createElement(\n                  'table',\n                  { className: 'table text-center table-hover mx-auto bg-white table-responsive-sm table-striped', style: { width: '100%' } },\n                  _react2.default.createElement(\n                    'thead',\n                    { className: 'text-center text-white bg-info border border-white' },\n                    _react2.default.createElement(\n                      'tr',\n                      { className: 'p-3' },\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        ' S/N'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Center Name'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Address'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'City'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Capacity'\n                      ),\n                      _react2.default.createElement(\n                        'th',\n                        { scope: 'col', className: 'border border-white' },\n                        'Facilities'\n                      ),\n                      _react2.default.createElement('th', { scope: 'col', className: 'border border-white' }),\n                      _react2.default.createElement('th', { scope: 'col', className: 'border border-white' })\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'tbody',\n                    null,\n                    Centers.map(function (center, i) {\n                      return _react2.default.createElement(\n                        'tr',\n                        { id: '#1', key: i, index: i, className: 'border border-white' },\n                        _react2.default.createElement(\n                          'td',\n                          { scope: 'row' },\n                          i + 1\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          center.name\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          center.address\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          center.city\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          center.capacity\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          center.facility\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          _react2.default.createElement(\n                            'button',\n                            { onClick: _this2.handleModify,\n                              type: 'button',\n                              className: 'btn-warning btn-sm' },\n                            'Edit'\n                          )\n                        ),\n                        _react2.default.createElement(\n                          'td',\n                          null,\n                          _react2.default.createElement(\n                            'button',\n                            {\n                              onClick: _this2.handleDelete,\n                              type: 'button',\n                              className: 'btn-danger btn-sm' },\n                            'Delete'\n                          )\n                        )\n                      );\n                    })\n                  )\n                ) : _react2.default.createElement(\n                  'p',\n                  { style: { margin: '10%', fontSize: '20px', fontStyle: 'Sans-serif' } },\n                  'There are no registered centers.'\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Modal,\n          { show: this.state.show, onHide: this.handleClose },\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Header,\n            { closeButton: true },\n            _react2.default.createElement(\n              _reactBootstrap.Modal.Title,\n              null,\n              'Modify Center Details.'\n            )\n          ),\n          _react2.default.createElement(_reactBootstrap.Modal.Body, null),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Footer,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.Button,\n              { onClick: this.handleClose },\n              'Close'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return AdminCenters;\n}(_react.Component);\n\nAdminCenters.propTypes = {\n  allCenters: _propTypes2.default.object,\n  getAllCenters: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    allCenters: state.allCenters\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getAllCenters: _getAllCentersAction2.default, editCenter: _editCenterAction2.default }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminCenters);\n\n//# sourceURL=webpack:///./client/src/components/AdminDashboard/AdminCenters.jsx?");

/***/ })

})