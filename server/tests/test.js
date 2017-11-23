import app from '../app';
import chaiHttp from 'chai-http';
import chai from 'chai';


const expect = chai;
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
    it('Returns the addednew event as an object', () => {
      chai.request(app)
        .post('/events')
        .send({
        centerId: 1034,
        centerName: 'sunset Villa',
        Location: 'Victoria Island, Lagos',
        capacity: 100,
        facility: ['Projector', 'Stage']
        })
        .end((err, res) => {
          expect(res).to.be.status(201);
        });
    });
    it('Returns a event whose id has been sent', () => {
      chai.request(app)
        .get('/events/65')
        .end((err, res) => {
          expect(res).to.be.status(200);
        });
    });
    it('Returns the updated event as an object', () => {
      chai.request(app)
        .put('/events/231')
        .send({
        eventId: 231,
        eventType: 'Wedding',
        eventName: 'Thisevent11',
        Location: 'Lagos',
        guestNo: 453,
        eventDate: '11-12-2017',
        facility: 'tables and chairs'
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
        centerId: 1034,
        centerName: 'sunset Villa',
        Location: 'Victoria Island, Lagos',
        capacity: 100,
        facility: ['Projector', 'Stage']
        })
        .end((err, res) => {
          expect(res).to.be.status(201);
        });
    });

    it('This will return an updated center', () => {
      chai.request(app)
        .put('/centers/1034')
        .send({
        centerId: 1034,
        centerName: 'sinset Ajegungun',
        Location: 'Victoria highland, Lagos',
        capacity: 10,
        facility: ['Projector', 'Stage']
        })
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
        centerId: 1023,
        centerName: 'sunset Villa',
        Location: 'Victoria Island, Lagos',
        capacity: 100,
        facility: ['Projector', 'Stage']
        })
        .end((err, res) => {
          expect(res).to.be.status(404);
        });
    });
  });
});