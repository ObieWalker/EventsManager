import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import helper from './testHelper';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();

module.exports = describe('Tests for the user', () => {
  it('should return a status 400 error response for null first name', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: '',
        lastName: 'testln',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('Please enter your first name');
        done();
      });
  });

  it('shoud return a status 400 error response for null last name', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: '',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('Please enter your last name');
        done();
      });
  });

  it('shoud return a status 400 error response for null username', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: 'testln',
        username: '',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to enter a username');
        done();
      });
  });

  it('shoud return a status 400 error response for null password', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: '',
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to input a password please');
        done();
      });
  });

  it('shoud return a status 400 error response for null password', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: '',
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You have to verify your password');
        done();
      });
  });

  it('shoud return a status 400 error response for no email input', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: ''
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.error[0].should.have.property('msg').to.equal('You did not enter a valid email');
        done();
      });
  });

  it('shoud return a status 201 response for new user', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn',
        lastName: 'testln',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(201);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('Your account has been created!, Your details');
        done();
      });
  });

  it('shoud return a status 400 response the email already existing', (done) => {
    chai
      .request(app)
      .post('/api/v1/users')
      .send({
        firstName: 'testfn1',
        lastName: 'testln',
        username: 'testun',
        password: helper.userPassword,
        verifyPassword: helper.userPassword,
        email: helper.userEmail
      })
      .end((err, res) => {
        expect(res).to.be.status(400);
        res.body.should.have.a('object');
        res.body.should.have.property('message').to.equal('User already exists');
        done();
      });
  });

  it('shoud return a status 200 response for successful sign in as admin', (done) => {
    chai
      .request(app)
      .post('/api/v1/users/login')
      .send({
        email: helper.adminEmail,
        password: helper.adminPassword
      })
      .end((err, res) => {
        helper.setAdminToken(res.body.token);
        done();
      });
  });

  it('shoud return a status 200 response for successful sign in as user', (done) => {
    chai
      .request(app)
      .post('/api/v1/users/login')
      .send({
        password: helper.userPassword,
        email: helper.userEmail,
      })
      .end((err, res) => {
        expect(res).to.be.status(200);
        res.body.should.have.a('object');
        res.body.should.have.property('token');
        helper.setUserToken(res.body.token);
        done();
      });
  });
});
