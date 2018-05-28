'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _testHelper = require('./testHelper');

var _testHelper2 = _interopRequireDefault(_testHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();

module.exports = describe('Tests for the user', function () {
  describe('POST api/v1/users', function () {
    it('should return a status 400 error response for null first name', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: '',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('Please enter your first name');
        done();
      });
    });

    it('shoud return a status 400 error response for null last name', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: '',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('Please enter your last name');
        done();
      });
    });

    it('shoud return a status 400 error response for null username', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: '',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to enter a username');
        done();
      });
    });

    it('shoud return a status 400 error response for null password', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: '',
        verifyPassword: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to input a password please');
        done();
      });
    });

    it('shoud return a status 400 error response for null verify password', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: '',
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to verify your password');
        done();
      });
    });

    it('shoud return a status 400 error response for no email input', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: 'randomString',
        email: 'testemail@gmail.com'
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('password did not match');
        done();
      });
    });

    it('shoud return a status 400 error response for no email input', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: ''
      }).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You did not enter a valid email');
        done();
      });
    });

    it('shoud return a status 201 response for new user', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(201);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Your account has been created!, Your details');
        done();
      });
    });

    it('shoud return a status 409 response the email already existing', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users').send({
        firstName: 'testfn1',
        lastName: 'testln',
        username: 'testun',
        password: _testHelper2.default.userPassword,
        verifyPassword: _testHelper2.default.userPassword,
        email: 'testuser1@gmail.com'
      }).end(function (err, res) {
        expect(res).to.be.status(409);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('User already exists');
        done();
      });
    });
  });

  describe('POST api/v1/users/login', function () {
    it('shoud return a status 404 response for wrong email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
        email: 'wrongEmail1111@gmail.com',
        password: _testHelper2.default.adminPassword
      }).end(function (err, res) {
        expect(res).to.be.status(404);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Wrong email or password');
        done();
      });
    });
    it('shoud return a status 403 response for wrong email', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
        email: _testHelper2.default.adminEmail,
        password: 'wrongPassword'
      }).end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Wrong email or password');
        done();
      });
    });

    it('shoud return a status 200 response for successful sign in as admin', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
        email: _testHelper2.default.adminEmail,
        password: _testHelper2.default.adminPassword
      }).end(function (err, res) {
        _testHelper2.default.setAdminToken(res.body.token);
        done();
      });
    });

    it('shoud return a status 200 response for successful sign in as user', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
        password: _testHelper2.default.userPassword,
        email: _testHelper2.default.userEmail
      }).end(function (err, res) {
        expect(res).to.be.status(200);
        res.body.should.have.a('object');
        res.body.should.have.property('token');
        _testHelper2.default.setUserToken(res.body.token);
        done();
      });
    });
  });

  describe('GET api/v1/users/', function () {
    it('shoud return a status 403 for not having admin rights', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/users/').end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No token, please sign up or sign in');
        done();
      });
    });

    it('shoud return a status 403 response for not having admin rights', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/users/?token=' + _testHelper2.default.userToken).end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('You do not have the admin privileges to do this');
        done();
      });
    });

    it('shoud return a status 200 response for successfully returning users', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/users/?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(200);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Users have been returned successfully');
        done();
      });
    });
  });

  describe('PUT api/v1/users/:id', function () {
    it('shoud return a status 403 for not being authenticated', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/id').end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No token, please sign up or sign in');
        done();
      });
    });

    it('shoud return a status 403 for not being an admin', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/id?token=' + _testHelper2.default.userToken).end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('You do not have the admin privileges to do this');
        done();
      });
    });
    it('shoud return a status 400 for user id input as string', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/id?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 400 for user id input as a negative number', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/' + -3 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 400 for user id input as a decimal', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/' + 3.5 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 404 for user not existing in database', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/' + 1000 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(404);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No user found');
        done();
      });
    });
    it('shoud return a status 200 for successfully setting the user as an admin', function (done) {
      _chai2.default.request(_app2.default).put('/api/v1/users/' + 6 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(200);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal("The user's details have been modified");
        done();
      });
    });
  });

  describe('DELETE api/v1/users/:id', function () {
    it('shoud return a status 403 for not being authenticated', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/id').end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No token, please sign up or sign in');
        done();
      });
    });
    it('shoud return a status 403 for not being an admin', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/id?token=' + _testHelper2.default.userToken).end(function (err, res) {
        expect(res).to.be.status(403);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('You do not have the admin privileges to do this');
        done();
      });
    });
    it('shoud return a status 400 for user id input as string', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/id?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 400 for user id input as a negative number', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/' + -3 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 400 for user id input as a decimal', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/' + 3.5 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('There was an error with the user ID input!');
        done();
      });
    });
    it('shoud return a status 404 for user not existing in database', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/' + 1000 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(404);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('No user found');
        done();
      });
    });
    it('shoud return a status 200 for successfully deleting the user\'s account', function (done) {
      _chai2.default.request(_app2.default).delete('/api/v1/users/' + 7 + '?token=' + _testHelper2.default.adminToken).end(function (err, res) {
        expect(res).to.be.status(200);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal("This user's account has been deleted");
        done();
      });
    });
  });
});