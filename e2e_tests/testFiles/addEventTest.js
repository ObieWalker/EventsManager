require('babel-register');

const addEventTest = () => {
  describe('Test add event', () => {
    describe('sign in as a user', () => {
      it('Should sign in as a user', (browser) => {
        browser
          .url('http://localhost:3000/')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h5', 'Sign in to your account.')
          .assert.urlContains('http://localhost:3000')
          .setValue('input[name=email]', 'isaac11walker@gmail.com')
          .setValue('input[name=password]', 'password')
          .click('button[type=submit')
          .pause(3000);
      });
    });
    describe('fill in booking form', () => {
      it('Should select a center on booking page', (browser) => {
        browser
          .url('http://localhost:3000/dashboard')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h3', 'Available Centers.')
          .assert.urlContains('http://localhost:3000/dashboard')
          .pause(2000)
          .execute(() => {
            const el = document.querySelectorAll('button.btn.btn-primary.btn-sm.active');
            el[0].click();
          })
          .pause(2000);
        //   .waitForElementVisible('div.card.card-image', 2000)
        //   .assert.containsText('h4.modal-header', 'The Place')
        //   .pause(2000)
        //   .useXpath()
        //   .click('//div/button[text()="Make Booking"]')
        //   .useCss()
        //   .pause(3000)
        //   .assert.containsText(
        //     '#eventTypeError',
        //     'Please select the type of event'
        //   )
        //   .pause(3000);
      });
      it('Should fill form on booking page', (browser) => {
        browser
          .setValue('select[name=eventType]', 'Wedding')
          .pause(1000)
          .setValue('input[name=date]', '7/28/2018')
          .pause(1000)
          .click('div[data-pick="1529881200000"]')
          .pause(1000)
          .click('button.btn-flat.picker__close')
          .pause(1000)
          .useXpath()
          .click('//div/button[text()="Make Booking"]')
          .pause(2000)
          .execute(() => {
            const el = document.querySelectorAll('button.btn-danger.btn-sm.signout');
            el[0].click();
          })
          .pause(2000)
          .end();
      });
    });
  });
};

export default addEventTest;
