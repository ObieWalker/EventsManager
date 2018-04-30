import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import helper from './testHelper';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();

module.exports = describe('Tests for the user', () => {
  describe('POST api/v1/users', () => {
    it(
      'should return a status 400 error response for null first name',
      (done) => {
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
            res.body.error[0].should.have
              .property('msg')
              .to.equal('Please enter your first name');
            done();
          });
      }
    );

    it(
      'shoud return a status 400 error response for null last name',
      (done) => {
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
            res.body.error[0].should.have
              .property('msg')
              .to.equal('Please enter your last name');
            done();
          });
      }
    );

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
          res.body.error[0].should.have
            .property('msg')
            .to.equal('You have to enter a username');
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
          res.body.error[0].should.have
            .property('msg')
            .to.equal('You have to input a password please');
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
          res.body.error[0].should.have
            .property('msg')
            .to.equal('You have to verify your password');
          done();
        });
    });

    it(
      'shoud return a status 400 error response for no email input',
      (done) => {
        chai
          .request(app)
          .post('/api/v1/users')
          .send({
            firstName: 'testfn',
            lastName: 'testln',
            username: 'testun',
            password: helper.userPassword,
            verifyPassword: 'randomString',
            email: 'testemail@gmail.com'
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('password did not match');
            done();
          });
      }
    );

    it(
      'shoud return a status 400 error response for no email input',
      (done) => {
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
            res.body.error[0].should.have
              .property('msg')
              .to.equal('You did not enter a valid email');
            done();
          });
      }
    );

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
          res.body.should.have
            .property('message')
            .to.equal('Your account has been created!, Your details');
          done();
        });
    });

    it(
      'shoud return a status 409 response the email already existing',
      (done) => {
        chai
          .request(app)
          .post('/api/v1/users')
          .send({
            firstName: 'testfn1',
            lastName: 'testln',
            username: 'testun',
            password: helper.userPassword,
            verifyPassword: helper.userPassword,
            email: 'testuser1@gmail.com'
          })
          .end((err, res) => {
            expect(res).to.be.status(409);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('User already exists');
            done();
          });
      }
    );
  });

  describe('POST api/v1/users/login', () => {
    it(
      'shoud return a status 404 response for wrong email',
      (done) => {
        chai
          .request(app)
          .post('/api/v1/users/login')
          .send({
            email: 'wrongEmail1111@gmail.com',
            password: helper.adminPassword
          })
          .end((err, res) => {
            expect(res).to.be.status(404);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('Wrong email or password');
            done();
          });
      }
    );
    it('shoud return a status 403 response for wrong email', (done) => {
      chai
        .request(app)
        .post('/api/v1/users/login')
        .send({
          email: helper.adminEmail,
          password: 'wrongPassword'
        })
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('Wrong email or password');
          done();
        });
    });

    it(
      'shoud return a status 200 response for successful sign in as admin',
      (done) => {
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
      }
    );

    it(
      'shoud return a status 200 response for successful sign in as user',
      (done) => {
        chai
          .request(app)
          .post('/api/v1/users/login')
          .send({
            password: helper.userPassword,
            email: helper.userEmail
          })
          .end((err, res) => {
            expect(res).to.be.status(200);
            res.body.should.have.a('object');
            res.body.should.have.property('token');
            helper.setUserToken(res.body.token);
            done();
          });
      }
    );
  });

  describe('GET api/v1/users/', () => {
    it('shoud return a status 403 for not having admin rights', (done) => {
      chai
        .request(app)
        .get('/api/v1/users/')
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('No token, please sign up or sign in');
          done();
        });
    });

    it(
      'shoud return a status 403 response for not having admin rights',
      (done) => {
        chai
          .request(app)
          .get(`/api/v1/users/?token=${helper.userToken}`)
          .end((err, res) => {
            expect(res).to.be.status(403);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('You do not have the admin privileges to do this');
            done();
          });
      }
    );

    it(
      'shoud return a status 200 response for successfully returning users',
      (done) => {
        chai
          .request(app)
          .get(`/api/v1/users/?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(200);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('Users have been returned successfully');
            done();
          });
      }
    );
  });

  describe('PUT api/v1/users/:id', () => {
    it('shoud return a status 403 for not being authenticated', (done) => {
      chai
        .request(app)
        .put('/api/v1/users/id')
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('No token, please sign up or sign in');
          done();
        });
    });

    it('shoud return a status 403 for not being an admin', (done) => {
      chai
        .request(app)
        .put(`/api/v1/users/id?token=${helper.userToken}`)
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('You do not have the admin privileges to do this');
          done();
        });
    });
    it('shoud return a status 400 for user id input as string', (done) => {
      chai
        .request(app)
        .put(`/api/v1/users/id?token=${helper.adminToken}`)
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('There was an error with the user ID input!');
          done();
        });
    });
    it(
      'shoud return a status 400 for user id input as a negative number',
      (done) => {
        chai
          .request(app)
          .put(`/api/v1/users/${-3}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('There was an error with the user ID input!');
            done();
          });
      }
    );
    it('shoud return a status 400 for user id input as a decimal', (done) => {
      chai
        .request(app)
        .put(`/api/v1/users/${3.5}?token=${helper.adminToken}`)
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('There was an error with the user ID input!');
          done();
        });
    });
    it(
      'shoud return a status 404 for user not existing in database',
      (done) => {
        chai
          .request(app)
          .put(`/api/v1/users/${1000}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(404);
            res.body.should.have.a('object');
            res.body.should.have.property('message').to.equal('No user found');
            done();
          });
      }
    );
    it(
      'shoud return a status 200 for successfully setting the user as an admin',
      (done) => {
        chai
          .request(app)
          .put(`/api/v1/users/${4}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(200);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal("The user's details have been modified");
            done();
          });
      }
    );
  });

  describe('DELETE api/v1/users/:id', () => {
    it('shoud return a status 403 for not being authenticated', (done) => {
      chai
        .request(app)
        .delete('/api/v1/users/id')
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('No token, please sign up or sign in');
          done();
        });
    });
    it('shoud return a status 403 for not being an admin', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/users/id?token=${helper.userToken}`)
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('You do not have the admin privileges to do this');
          done();
        });
    });
    it('shoud return a status 400 for user id input as string', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/users/id?token=${helper.adminToken}`)
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('There was an error with the user ID input!');
          done();
        });
    });
    it(
      'shoud return a status 400 for user id input as a negative number',
      (done) => {
        chai
          .request(app)
          .delete(`/api/v1/users/${-3}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('There was an error with the user ID input!');
            done();
          });
      }
    );
    it('shoud return a status 400 for user id input as a decimal', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/users/${3.5}?token=${helper.adminToken}`)
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.should.have
            .property('message')
            .to.equal('There was an error with the user ID input!');
          done();
        });
    });
    it(
      'shoud return a status 404 for user not existing in database',
      (done) => {
        chai
          .request(app)
          .delete(`/api/v1/users/${1000}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(404);
            res.body.should.have.a('object');
            res.body.should.have.property('message').to.equal('No user found');
            done();
          });
      }
    );
    it(
      'shoud return a status 200 for successfully setting the user as an admin',
      (done) => {
        chai
          .request(app)
          .delete(`/api/v1/users/${4}?token=${helper.adminToken}`)
          .end((err, res) => {
            expect(res).to.be.status(200);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal("This user's account has been deleted");
            done();
          });
      }
    );
  });
});
