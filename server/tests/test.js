import app from '../app'
import chaiHttp from 'chai-http'
import chai from 'chai'

const expect = chai
chai.use(chaiHttp)

describe('Test endpoint', () => {
  describe('Valid Event URL', () => {
    it('This will return all events', () => {
      chai.request(app)
        .get('/events')
        .end((err, res) => {
          expect(res).to.be.status(200);
        })
    })
  })
  describe('Valid Event URL', () => {
    it('This will return all events', () => {
      chai.request(app)
        .get('/events/50')
        .end((err, res) => {
          expect(res).to.be.status(404);
        })
    })
  })
  it('Returns the addednew event as an object', () => {
    chai.request(app)
      .post('/events')
      .send({
        eventtype: 'Wedding',
        eventdate: 12/12/2019,
        guestno: 120
      })
      .end((err, res) => {
        expect(res).to.be.status(201);
      })
  })
  it('Returns a event whose id has been sent', () => {
    chai.request(app)
      .get('/events/105')
      .end((err, res) => {
        expect(res).to.be.status(404)
      })
  })
  it('Returns the updated event', () => {
    chai.request(app)
      .put('/events/3')
      .send({
        eventtype: 'Wedding',
        guestno: 453,
        eventdate: '11-12-2017'
      })
      .end((err, res) => {
        expect(res).to.be.status(200);
      })
  })

  describe('A center is added', () => {
    it('Returns the new center', () => {
      chai.request(app)
        .post('/centers')
        .send({
          centername: 'sunset Villa',
          address: '23, Aloma close',
          facility: 'None',
          capacity: 150,
          location: 'Somolu, Lagos',
          bookstatus: true
        })
        .end((err, res) => {
          expect(res).to.be.status(201);
        })
    })

    it('This will return an updated center', () => {
      chai.request(app)
        .put('/centers/2')
        .send({
          centername: 'sunset Villa',
          address: '23, Aloma close',
          facility: 'None',
          capacity: 130,
          location: 'Somolu, Lagos',
          bookstatus: true
        })
        .end((err, res) => {
          expect(res).to.be.status(200)
        })
    })
  })

  describe('Invalid URL', () => {
    it('Returns a 404 for invalid url', () => {
      chai.request(app)
        .post('/no-url')
        .send({
          centerName: 'sunset Villa',
          location: 'Victoria Island, Lagos',
          capacity: 100,
          facility: ['Projector', 'Stage']
        })
        .end((err, res) => {
          expect(res).to.be.status(404);
        })
    })
  })

  describe('Registration', () => {
    it('Registers new user', (done) => {
      chai.request(app)
        .post('/users')
        .send({
          firstname: 'testname1',
          lastname: 'testlastname',
          email: 'testemail@gmail.com',
          username: 'testuser',
          password: 'testingpw',
          verifyPassword: 'testingpw'
        })
        .end((err, res) => {
          expect(res).to.be.status(201)
        })
    })
  })

  describe('Sign In', () => {
    it ('signs in a user', (done) => {
      chai.request(app)
        .post('users/login')
        .send({
          email: 'email@gmail.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.be.status(200)
        })
    })
  })

})