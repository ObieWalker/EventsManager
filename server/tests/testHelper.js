import faker from 'faker';

class TestHelper {
  constructor() {
    this.userToken = undefined;
    this.adminToken = undefined;
    this.centerId = undefined;
    this.eventId = undefined;
    this.userEmail = `${faker.internet.email()}`;
    this.adminEmail = 'adminuser@gmail.com';
    this.userPassword = 'password';
    this.adminPassword = 'password';
    this.wrongPassword = `${faker.random.word()}`;
    this.wrongToken = `${faker.random.words()}`;
    this.wrongEmail = `${faker.internet.email()}`;
    this.centerName = faker.random.words();
    this.stringId = 'stringValue';
  }

  setUserToken(userToken) {
    this.userToken = userToken;
  }

  setAdminToken(adminToken) {
    this.adminToken = adminToken;
  }

  setCenterId(centerId) {
    this.centerId = centerId;
  }

  setEventId(eventId) {
    this.eventId = eventId;
  }
}

export default new TestHelper();
