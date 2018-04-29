import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import helper from './testHelper';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();

module.exports = describe('Tests for Events', () => {
  describe('POST api/v1/events', () => {
    it('should return a status 403 error for no token', (done) => {
      chai.request(app)
        .post('/api/v1/events')
        .send({
          userId: 4,
          centerId: 2,
          eventType: 'Wedding',
          email: helper.userEmail,
          date: 5 / 12 / 2019,
          guestNo: 1000
        })
        .end((err, res) => {
          expect(res).to.be.status(403);
          res.body.should.have.a('object');
          res.body.should.have.property('message').to.equal('No token, please sign up or sign in');
          done();
        });
    });

    it('should return a status 401 error for authenticated token', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.wrongToken}`)
        .send({
          userId: 4,
          centerId: 2,
          eventType: 'Wedding',
          email: helper.userEmail,
          date: 5 / 12 / 2019,
          guestNo: 1000
        })
        .end((err, res) => {
          expect(res).to.be.status(401);
          res.body.should.have.a('object');
          res.body.should.have.property('message').to.equal('Failed to authenticate user');
          done();
        });
    });

    it('should return a status 400 error for an empty event type', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 4,
          centerId: 2,
          eventType: '',
          email: helper.userEmail,
          date: 5 / 12 / 2019,
          guestNo: 1000
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('The event type cannot be empty');
          done();
        });
    });

    it('should return a status 400 error for a string input for the estimated guest number', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 5,
          centerId: 2,
          eventType: 'Conference',
          email: helper.userEmail,
          date: 5 / 12 / 2019,
          guestNo: 'one hundred'
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('Your guest estimate must be a number more than 2');
          done();
        });
    });

    it('should return a status 400 error for too low estimated guest', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 7,
          centerId: 2,
          eventType: 'Meeting',
          email: helper.userEmail,
          date: 5 / 12 / 2019,
          guestNo: 1
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('Your guest estimate must be a number more than 2');
          done();
        });
    });

    it('should return a status 400 error for an invalid date', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 9,
          centerId: 2,
          eventType: 'Meeting',
          email: helper.userEmail,
          date: 'todays date',
          guestNo: 50
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('Your date cannot be in the past');
          done();
        });
    });

    it('should return a status 400 error for a date in the past', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 9,
          centerId: 2,
          eventType: 'Meeting',
          email: helper.userEmail,
          date: 5 / 23 / 2013,
          guestNo: 50
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('Your date cannot be in the past');
          done();
        });
    });

    it('should return a status 400 error for null date', (done) => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 9,
          centerId: helper.centerId,
          eventType: 'Meeting',
          email: 'testuser7@gmail.com',
          date: '',
          guestNo: 50
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.body.should.have.a('object');
          res.body.error[0].should.have.property('msg').to.equal('Your date entry cannot be empty');
          done();
        });
    });


    it('should return a status of 201 response for a booked event', () => {
      chai.request(app)
        .post(`/api/v1/events?token=${helper.userToken}`)
        .send({
          userId: 3,
          centerId: helper.centerId,
          eventType: 'Wedding',
          email: 'testuser1@gmail.com',
          date: 12 / 12 / 2019,
          guestNo: 120
        })
        .end((err, res) => {
          expect(res).to.be.status(201);
          helper.setEventId(res.body.event.id);
        });
    });
  });


  describe('GET api/v1/events', () => {
    it('should return a status 200 success response to get all events', (done) => {
      chai
        .request(app)
        .get('/api/v1/events')
        .end((err, res) => {
          expect(res).to.be.status(200);
          res.body.should.have.a('object');
          res.body.should.have.property('success').to.equal(true);
          done();
        });
    });

    it('should return a status 200 success response to get 6 events', (done) => {
      chai
        .request(app)
        .get('/api/v1/events')
        .end((err, res) => {
          expect(res).to.be.status(200);
          res.body.should.have.property('events');
          res.body.events.length.should.equal(6);
          done();
        });
    });

    it('should return a status 200 success response to get 3 events', (done) => {
      chai
        .request(app)
        .get('/api/v1/events?limit=3')
        .end((err, res) => {
          expect(res).to.be.status(200);
          res.body.should.have.property('events');
          res.body.events.length.should.equal(3);
          done();
        });
    });

    describe('GET api/v1/center/events/:centerId', () => {
      it('should return a status 404 error response for getting events for a center that does not exist', (done) => {
        chai
          .request(app)
          .get('/api/v1/center/events/0')
          .end((err, res) => {
            expect(res).to.be.status(404);
            res.should.be.a('object');
            res.body.should.have.property('message').to.equal('This center does not exist');
            done();
          });
      });

      it('should return a status 400 error response for getting events with a wrong centerId type', (done) => {
        chai
          .request(app)
          .get('/api/v1/center/events/centerId')
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.should.be.a('object');
            res.body.should.have.property('message').to.equal('There was an error with the event ID input!');
            done();
          });
      });

      it('should return a status 200 success response for getting events for a center', (done) => {
        chai
          .request(app)
          .get('/api/v1/center/events/2')
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.should.have.property('success').to.equal(true);
            done();
          });
      });
    });
  });

  describe('PUT api/v1/events/:id', () => {
    it('should return a status 400 response for event ID that is a negative number', (done) => {
      chai
        .request(app)
        .put(`/api/v1/events/-4?token=${helper.userToken}`)
        .send({
          name: 'test event changed',
          eventType: 'Conference',
          date: '12/2/2019',
          guestNo: 200,
          email: 'testuser1@gmail.com',
          centerId: helper.centerId
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.should.be.a('object');
          res.body.should.have.property('message').to.equal('There was an error with the event ID input!');
          done();
        });
    });

    it('should return a status 400 response for event ID that is not a number', (done) => {
      chai
        .request(app)
        .put(`/api/v1/events/eventId?token=${helper.userToken}`)
        .send({
          name: 'test event changed',
          eventType: 'Conference',
          date: '12/2/2019',
          guestNo: 200,
          email: 'testuser1@gmail.com',
          centerId: helper.centerId
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.should.be.a('object');
          res.body.should.have.property('message').to.equal('There was an error with the event ID input!');
          done();
        });
    });

    it('should return a status 400 response for event ID that contains decimal place', (done) => {
      chai
        .request(app)
        .put(`/api/v1/events/5.4?token=${helper.userToken}`)
        .send({
          name: 'test event changed',
          eventType: 'Conference',
          date: '12/2/2019',
          guestNo: 200,
          email: 'testuser1@gmail.com',
          centerId: helper.centerId
        })
        .end((err, res) => {
          expect(res).to.be.status(400);
          res.should.be.a('object');
          res.body.should.have.property('message').to.equal('There was an error with the event ID input!');
          done();
        });
    });

    it('should return a status 404 response for modifying an event that does not exist', (done) => {
      chai
        .request(app)
        .put(`/api/v1/events/100000?token=${helper.userToken}`)
        .send({
          name: 'test event changed',
          eventType: 'Conference',
          date: '12/2/2019',
          guestNo: 200,
          email: 'testuser1@gmail.com',
          centerId: helper.centerId
        })
        .end((err, res) => {
          expect(res).to.be.status(404);
          res.should.be.a('object');
          res.body.should.have.property('message').to.equal('Event does not exist within our records');
          done();
        });
    });

    // it('should return a status 200 success response for valid put request', (done) => {
    //   chai
    //     .request(app)
    //     .put(`/api/v1/events/${helper.eventId}?token=${helper.userToken}`)
    //     .send({
    //       name: 'test event changed',
    //       eventType: 'Conference',
    //       date: '12/2/2019',
    //       guestNo: 200,
    //       email: 'testuser1@gmail.com',
    //       centerId: helper.centerId
    //     })
    //     .end((err, res) => {
    //       expect(res).to.be.status(400);
    //       res.should.be.a('object');
    //       res.body.should.have.property('message').to.equal('Your event has been updated');
    //       done();
    //     });
    // });

    describe('DELETE api/v1/events/:id', () => {
      it('should return a status 404 success response for deleting a non existing event', (done) => {
        chai
          .request(app)
          .delete(`/api/v1/events/0?token=${helper.userToken}`)
          .end((err, res) => {
            expect(res).to.be.status(404);
            res.should.be.a('object');
            res.body.should.have.property('message').to.equal('Event not found');
            done();
          });
      });

      it('should return a status 400 success response for bad input for event Id', (done) => {
        chai
          .request(app)
          .delete(`/api/v1/events/eventID?token=${helper.userToken}`)
          .end((err, res) => {
            expect(res).to.be.status(400);
            res.should.be.a('object');
            res.body.should.have.property('message').to.equal('There was an error with the event ID input!');
            done();
          });
      });

    //   it('should return a status 200 success response for deleting an event', (done) => {
    //     chai
    //       .request(app)
    //       .delete(`/api/v1/events/${helper.eventId}?token=${helper.userToken}`)
    //       .end((err, res) => {
    //         expect(res).to.be.status(200);
    //         res.should.be.a('object');
    //         res.body.should.have.property('message').to.equal('The event has been cancelled');
    //         done();
    //       });
    //   });
    });
  });
});
