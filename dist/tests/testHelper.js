'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class TestHelper
 */
var TestHelper = function () {
  /**
   * Creates an instance of TestHelper.
   * @memberof TestHelper
   */
  function TestHelper() {
    _classCallCheck(this, TestHelper);

    this.userToken = undefined;
    this.adminToken = undefined;
    this.centerId = undefined;
    this.eventId = undefined;
    this.userEmail = '' + _faker2.default.internet.email();
    this.adminEmail = 'adminuser@gmail.com';
    this.userPassword = 'password';
    this.adminPassword = 'password';
    this.wrongPassword = '' + _faker2.default.random.word();
    this.wrongToken = '' + _faker2.default.random.words();
    this.wrongEmail = '' + _faker2.default.internet.email();
    this.centerName = _faker2.default.random.words();
    this.stringId = 'stringValue';
  }
  /**
   * @returns {*} null
   *
   * @param {any} userToken
   * @memberof TestHelper
   */


  _createClass(TestHelper, [{
    key: 'setUserToken',
    value: function setUserToken(userToken) {
      this.userToken = userToken;
    }
    /**
     * @returns {*} null
     *
     * @param {any} adminToken
     * @memberof TestHelper
     */

  }, {
    key: 'setAdminToken',
    value: function setAdminToken(adminToken) {
      this.adminToken = adminToken;
    }
    /**
     * @returns {*} null
     *
     * @param {any} centerId
     * @memberof TestHelper
     */

  }, {
    key: 'setCenterId',
    value: function setCenterId(centerId) {
      this.centerId = centerId;
    }
    /**
     * @returns {*} null
     *
     * @param {any} eventId
     * @memberof TestHelper
     */

  }, {
    key: 'setEventId',
    value: function setEventId(eventId) {
      this.eventId = eventId;
    }
  }]);

  return TestHelper;
}();

exports.default = new TestHelper();