import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const expect = chai;
// const should = chai.should();
chai.use(chaiHttp);

describe('Test endpoint', () => {
  describe('Valid Event URL', () => {
    it('This will return all events', () => {
      chai.request(app)
        .get('/events')
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });
  });
  describe('Valid Event URL', () => {
    it('This will return all events', () => {
      chai.request(app)
        .get('/events/50')
        .end((err, res) => {
          expect(res).to.be.status(404);
        });
    });
  });
  it('Returns the addednew event as an object', () => {
    chai.request(app)
      .post('/events')
      .send({
        eventtype: 'Wedding',
        date: 12 / 12 / 2019,
        guestno: 120
      })
      .end((err, res) => {
        expect(res).to.be.status(201);
      });
  });
  it('Returns a event whose id has been sent', () => {
    chai.request(app)
      .get('/events/105')
      .end((err, res) => {
        expect(res).to.be.status(404);
      });
  });
  it('Returns the updated event', () => {
    chai.request(app)
      .put('/events/3')
      .send({
        eventtype: 'Wedding',
        guestno: 453,
        date: '11-12-2017'
      })
      .end((err, res) => {
        expect(res).to.be.status(200);
      });
  });

  describe('A center is added', () => {
    it('Returns the new center', () => {
      chai.request(app)
        .post('/centers')
        .send({
          name: 'sunset Villa',
          address: '23, Aloma close',
          facility: 'None',
          capacity: 150,
          location: 'Somolu, Lagos',
          bookstatus: true
        })
        .end((err, res) => {
          expect(res).to.be.status(201);
        });
    });

    it('This will return an updated center', () => {
      chai.request(app)
        .put('/centers/2')
        .send({
          name: 'sunset Villa',
          address: '23, Aloma close',
          facility: 'None',
          capacity: 130,
          location: 'Somolu, Lagos',
          bookstatus: true
        })
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });

    it('Returns all centers', () => {
      chai.request(app)
        .get('/centers')
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });

    it('returns an error as center does not exist', () => {
      chai.request(app)
        .get('/centers/456')
        .end((err, res) => {
          expect(res).to.be.status(404);
        });
    });

    it('Returns center with id=1', () => {
      chai.request(app)
        .get('/centers/1')
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });

    it('return an error as center does not exist', () => {
      chai.request(app)
        .delete('/centers/456')
        .end((err, res) => {
          expect(res).to.be.status(404);
        });
    });
    it('deletes a center', () => {
      chai.request(app)
        .delete('/centers/1')
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });
  });

  describe('Invalid URL', () => {
    it('Returns a 404 for invalid url', () => {
      chai.request(app)
        .post('/no-url')
        .send({
          name: 'sunset Villa',
          location: 'Victoria Island, Lagos',
          capacity: 100,
          facility: ['Projector', 'Stage']
        })
        .end((err, res) => {
          expect(res).to.be.status(404);
        });
    });
  });
// I get 'expect is not a function' as error
  // describe('Registration', () => {
  //   it('fail to register user', (done) => {
  //     chai.request(app)
  //       .post('/users')
  //       .send({
  //         firstname: 'testname1',
  //         lastname: 'testlastname',
  //         email: 'testemail@gmail.com',
  //         username: 'testuser',
  //         password: 'testingpw',
  //         verifyPassword: 'testingpw'
  //       })
  //       .end((err, res) => {
  //         res.should.have.status(400)
  //         done()
  //       })
  //   })
  //   it('password mismatch', (done) => {
  //     chai.request(app)
  //       .post('/users')
  //       .send({
  //         firstname: 'testname1',
  //         lastname: 'testlastname',
  //         email: 'testemail@gmail.com',
  //         username: 'testuser',
  //         password: 'testingpw',
  //         verifyPassword: 'wrongpassword'
  //       })
  //       .end((err, res) => {
  //         res.should.have.status(400)
  //         done()
  //       })
  //   })
  // })
});
