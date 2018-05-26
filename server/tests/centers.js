import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../app';
import helper from './testHelper';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();
faker.seed(300);

module.exports = describe('Tests for the centers', () => {
  describe('Adding a new center', () => {
    it(
      'should return a status 403 error response due to no admin token',
      (done) => {
        chai
          .request(app)
          .post('/api/v1/centers')
          .send({
            name: 'The Boulevard',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming\
             pool and ${faker.lorem.sentence}`,
            capacity: faker.random.number(),
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(403);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('No token, please sign up or sign in');
            done();
          });
      }
    );

    it(
      'should return a status 403 error response due to unauthenticated token',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.wrongToken}`)
          .send({
            name: 'The Boulevard',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: faker.random.number(),
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(401);
            res.body.should.have.a('object');
            res.body.should.have
              .property('message')
              .to.equal('Failed to authenticate user');
            done();
          });
      }
    );

    it('should return a status 400 error response empty name field', (done) => {
      chai
        .request(app)
        .post(`/api/v1/centers?token=${helper.adminToken}`)
        .send({
          name: '',
          address: faker.address.streetAddress(),
          facility: `This facility contains a Swimming pool and ${
            faker.lorem.sentence
          }`,
          capacity: faker.random.number(),
          city: faker.address.city()
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have
            .property('msg')
            .to.equal('Your center must have a name');
          done();
        });
    });

    it(
      'should return a status 400 error response missing a city name',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: faker.random.number(),
            city: ''
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.error[0].should.have
              .property('msg')
              .to.equal('You must enter a city');
            done();
          });
      }
    );

    it(
      'should return a status 400 error response empty address field',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: '',
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: faker.random.number(),
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.error[0].should.have
              .property('msg')
              .to.equal('You have to input an address');
            done();
          });
      }
    );

    it(
      'should return a status 400 error response for empty capacity input',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: '',
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.error[0].should.have
              .property('msg')
              .to.equal('You have to enter the venue capacity');
            done();
          });
      }
    );

    it(
      'should return a status 400 error response for string capacity input',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: 'one hundred',
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.error[0].should.have
              .property('msg')
              .to.equal('The capacity must be an integer value above 10');
            done();
          });
      }
    );

    it(
      'should return 400 error response for capacity input less than 10',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and \
          ${faker.lorem.sentence}`,
            capacity: 5,
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.body.should.have.a('object');
            res.body.error[0].should.have
              .property('msg')
              .to.equal('The capacity must be an integer value above 10');
            done();
          });
      }
    );

    it(
      'should return a status 201 response for adding a new center',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: 'test address',
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: 300,
            city: faker.address.city()
          })
          .end((err, res) => {
            expect(res).to.be.status(201);
            res.body.should.have.a('object');
            res.body.should.have.property('center');
            helper.setCenterId(res.body.center.id);
            done();
          });
      }
    );

    it(
      'should return 409 error response for adding a center already existing',
      (done) => {
        chai
          .request(app)
          .post(`/api/v1/centers?token=${helper.adminToken}`)
          .send({
            name: 'test center name',
            address: 'test address',
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: 300,
            city: faker.address.city()
          })
          .end((err, res) => {
            res.should.have.status(409);
            res.should.be.a('object');
            res.body.should.have
              .property('message')
              .to.equal('Center already exists');
            done();
          });
      }
    );
  });

  describe('Getting centers', () => {
    it(
      'should return a status 200 success response for getting centers',
      (done) => {
        chai
          .request(app)
          .get('/api/v1/centers')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('centers');
            done();
          });
      }
    );

    it(
      'should return a status 200 success response with default limit = 6',
      (done) => {
        chai
          .request(app)
          .get('/api/v1/centers')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('centers');
            res.body.centers.length.should.equal(6);
            done();
          });
      }
    );

    it(
      'should return a status 200 success response with default limit = 3',
      (done) => {
        chai
          .request(app)
          .get('/api/v1/centers?limit=3')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('centers');
            res.body.centers.length.should.equal(3);
            done();
          });
      }
    );

    it(
      'should return a status 200 success response for getting a center',
      (done) => {
        chai
          .request(app)
          .get(`/api/v1/centers/${helper.centerId}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.should.have.property('center');
            done();
          });
      }
    );

    it(
      'should return 400 error response for center request not existing',
      (done) => {
        chai
          .request(app)
          .get('/api/v1/centers/0')
          .end((err, res) => {
            res.should.have.status(400);
            res.should.be.a('object');
            res.body.should.have
              .property('message')
              .equal('There was an error with the center ID input!');
            done();
          });
      }
    );

    it(
      'should return a status 400 error response for invalid center id type',
      (done) => {
        chai
          .request(app)
          .get('/api/v1/centers/centerTen')
          .end((err, res) => {
            res.should.have.status(400);
            res.should.be.a('object');
            res.body.should.have
              .property('message')
              .to.equal('There was an error with the center ID input!');
            done();
          });
      }
    );
  });

  describe('Test to edit centers', () => {
    it('should return a status 403 error response for no token', (done) => {
      chai
        .request(app)
        .put('/api/v1/centers/1')
        .send({
          name: 'test center name',
          address: faker.address.streetAddress(),
          facility: `This facility contains a Swimming pool and ${
            faker.lorem.sentence
          }`,
          capacity: 100,
          city: faker.address.city()
        })
        .end((err, res) => {
          res.should.have.status(403);
          res.should.be.a('object');
          res.body.should.have
            .property('message')
            .equal('No token, please sign up or sign in');
          done();
        });
    });

    it('should return a status 401 error response for wrong token', (done) => {
      chai
        .request(app)
        .put(`/api/v1/centers/${helper.centerId}?token=${helper.wrongToken}`)
        .send({
          name: 'test center name',
          address: faker.address.streetAddress(),
          facility: `This facility contains a Swimming pool and ${
            faker.lorem.sentence
          }`,
          capacity: 100,
          city: faker.address.city()
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          res.body.should.have
            .property('message')
            .equal('Failed to authenticate user');
          done();
        });
    });

    it(
      'should return a status 200 success response',
      (done) => {
        chai
          .request(app)
          .put(`/api/v1/centers/${helper.centerId}?token=${helper.adminToken}`)
          .send({
            name: 'new center name',
            address: faker.address.streetAddress(),
            facility: `This facility contains a Swimming pool and ${
              faker.lorem.sentence
            }`,
            capacity: 100,
            city: faker.address.city()
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.should.have
              .property('message')
              .to.equal('The center has been modified');
            done();
          });
      }
    );
  });

  describe('Test to delete centers', () => {
    it('should return a status 403 error response for no token', (done) => {
      chai
        .request(app)
        .delete('/api/v1/centers/1')
        .end((err, res) => {
          res.should.have.status(403);
          res.should.be.a('object');
          res.body.should.have
            .property('message')
            .equal('No token, please sign up or sign in');
          done();
        });
    });

    it(
      'should return a status 400 error response for no such center',
      (done) => {
        chai
          .request(app)
          .delete(`/api/v1/centers/100000?token=${helper.adminToken}`)
          .end((err, res) => {
            res.should.have.status(400);
            res.should.be.a('object');
            res.body.should.have.property('message').equal('No such center');
            done();
          });
      }
    );

    it(
      'should return a status 200 error response for deleting a center',
      (done) => {
        chai
          .request(app)
          .delete(`/api/v1/centers/${helper.centerId}\
          ?token=${helper.adminToken}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.should.have
              .property('message')
              .equal('The center has been deleted!');
            done();
          });
      }
    );
  });
});
