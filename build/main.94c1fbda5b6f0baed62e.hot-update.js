webpackHotUpdate("main",{

/***/ "./client/src/components/Centers.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/Centers.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactMaterialize = __webpack_require__(/*! react-materialize */ \"./node_modules/react-materialize/lib/index.js\");\n\nvar _getAllCentersAction = __webpack_require__(/*! ../actions/getAllCentersAction */ \"./client/src/actions/getAllCentersAction.js\");\n\nvar _getAllCentersAction2 = _interopRequireDefault(_getAllCentersAction);\n\nvar _Search = __webpack_require__(/*! ./Search.jsx */ \"./client/src/components/Search.jsx\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _CenterCard = __webpack_require__(/*! ./CenterCard.jsx */ \"./client/src/components/CenterCard.jsx\");\n\nvar _CenterCard2 = _interopRequireDefault(_CenterCard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AllCenters = function (_Component) {\n  _inherits(AllCenters, _Component);\n\n  function AllCenters(props) {\n    _classCallCheck(this, AllCenters);\n\n    var _this = _possibleConstructorReturn(this, (AllCenters.__proto__ || Object.getPrototypeOf(AllCenters)).call(this, props));\n\n    _this.state = {\n      centers: ''\n    };\n    return _this;\n  }\n\n  _createClass(AllCenters, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.getAllCenters();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var Centers = this.props.allCenters;\n      console.log('this is it here ===>', Centers);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            'All centers and details.'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'center' },\n            _react2.default.createElement(_Search2.default, null),\n            ' ',\n            _react2.default.createElement('br', null),\n            ' ',\n            _react2.default.createElement('br', null)\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            ' ',\n            Centers.fetchedCenters.length > 0 ? _react2.default.createElement(\n              _reactMaterialize.Row,\n              null,\n              Centers.fetchedCenters.map(function (centers, i) {\n                return _react2.default.createElement(_CenterCard2.default, { key: i, centers: centers });\n              })\n            ) : 'There are no registered centers.'\n          )\n        )\n      );\n    }\n  }]);\n\n  return AllCenters;\n}(_react.Component);\n\nAllCenters.propTypes = {\n  allCenters: _propTypes2.default.array,\n  getAllCenters: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    allCenters: state.allCenters\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getAllCenters: _getAllCentersAction2.default }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AllCenters);\n\n//# sourceURL=webpack:///./client/src/components/Centers.jsx?");

/***/ })

})