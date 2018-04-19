import chaiHttp from 'chai-http';
import chai from 'chai';
import fs from 'fs';
import faker from 'faker';
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
});
