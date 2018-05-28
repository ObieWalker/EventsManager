'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _testHelper = require('./testHelper');

var _testHelper2 = _interopRequireDefault(_testHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();
_faker2.default.seed(300);

module.exports = describe('Tests for the centers', function () {
  describe('Adding a new center', function () {
    it('should return a status 403 error response due to no admin token', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers').send({
        name: 'The Boulevard',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming             pool and ' + _faker2.default.lorem.sentence,
        capacity: _faker2.default.random.number(),
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No token, please sign up or sign in');
        done();
      });
    });

    it('should return a status 403 error response due to unauthenticated token', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.wrongToken).send({
        name: 'The Boulevard',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: _faker2.default.random.number(),
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(401);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Failed to authenticate user');
        done();
      });
    });

    it('should return a status 400 error response empty name field', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: '',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: _faker2.default.random.number(),
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('Your center must have a name');
        done();
      });
    });

    it('should return a status 400 error response missing a city name', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: _faker2.default.random.number(),
        city: ''
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You must enter a city');
        done();
      });
    });

    it('should return a status 400 error response empty address field', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: '',
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: _faker2.default.random.number(),
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to input an address');
        done();
      });
    });

    it('should return a status 400 error response for empty capacity input', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: '',
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to enter the venue capacity');
        done();
      });
    });

    it('should return a status 400 error response for string capacity input', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 'one hundred',
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('The capacity must be an integer value above 10');
        done();
      });
    });

    it('should return 400 error response for capacity input less than 10', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and           ' + _faker2.default.lorem.sentence,
        capacity: 5,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('The capacity must be an integer value above 10');
        done();
      });
    });

    it('should return a status 201 response for adding a new center', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: 'test address',
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 300,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        expect(res).to.be.status(201);
        res.body.should.have.a('object');
        res.body.should.have.property('center');
        _testHelper2.default.setCenterId(res.body.center.id);
        done();
      });
    });

    it('should return 409 error response for adding a center already existing', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/centers?token=' + _testHelper2.default.adminToken).send({
        name: 'test center name',
        address: 'test address',
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 300,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        res.should.have.status(409);
        res.should.be.a('object');
        res.body.should.have.property('message').to.equal('Center already exists');
        done();
      });
    });
  });

  describe('Getting centers', function () {
    it('should return a status 200 success response for getting centers', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('centers');
        done();
      });
    });

    it('should return a status 200 success response with default limit = 6', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('centers');
        res.body.centers.length.should.equal(6);
        done();
      });
    });

    it('should return a status 200 success response with default limit = 3', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers?limit=3').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.have.property('centers');
        res.body.centers.length.should.equal(3);
        done();
      });
    });

    it('should return a status 200 success response for getting a center', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers/' + _testHelper2.default.centerId).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.property('center');
        done();
      });
    });

    it('should return 400 error response for center request not existing', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers/0').end(function (err, res) {
        res.should.have.status(400);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('There was an error with the center ID input!');
        done();
      });
    });

    it('should return a status 400 error response for invalid center id type', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/centers/centerTen').end(function (err, res) {
        res.should.have.status(400);
        res.should.be.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the center ID input!');
        done();
      });
    });
  });

  describe('Test to edit centers', function () {
    it('should return a status 403 error response for no token', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/centers/1').send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 100,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        res.should.have.status(403);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('No token, please sign up or sign in');
        done();
      });
    });

    it('should return a status 401 error response for wrong token', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/centers/' + _testHelper2.default.centerId + '?token=' + _testHelper2.default.wrongToken).send({
        name: 'test center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 100,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        res.should.have.status(401);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('Failed to authenticate user');
        done();
      });
    });

    it('should return a status 200 success response', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/centers/' + _testHelper2.default.centerId + '?token=' + _testHelper2.default.adminToken).send({
        name: 'new center name',
        address: _faker2.default.address.streetAddress(),
        facility: 'This facility contains a Swimming pool and ' + _faker2.default.lorem.sentence,
        capacity: 100,
        city: _faker2.default.address.city()
      }).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.property('message').to.equal('The center has been modified');
        done();
      });
    });
  });

  describe('Test to delete centers', function () {
    it('should return a status 403 error response for no token', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/centers/1').end(function (err, res) {
        res.should.have.status(403);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('No token, please sign up or sign in');
        done();
      });
    });

    it('should return a status 400 error response for no such center', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/centers/100000?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        res.should.have.status(400);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('No such center');
        done();
      });
    });

    it('should return a status 200 error response for deleting a center', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/centers/' + _testHelper2.default.centerId + '          ?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.property('message').equal('The center has been deleted!');
        done();
      });
    });
  });
});