require('babel-register');

const deleteEventTest = () => {
  describe('deleting an event as a user', () => {
    describe('sign in as a user', () => {
      it('Should sign in as a user', (browser) => {
        browser
          .url('http://localhost:3000/')
          .useCss()
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
    describe('opens upcoming events page', () => {
      it('Should delete a users event', (browser) => {
        browser
          .url('http://localhost:3000/dashboard')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h3', 'Available Centers.')
          .assert.urlContains('http://localhost:3000/dashboard')
          .useXpath()
          .click('//div/ul/li/a[text()="Your Upcoming Events"]')
          .pause(2000)
          .useCss()
          .execute(() => {
            const el = document.querySelectorAll('button.btn btn-primary.btn-danger.btn-sm');
            el[0].click();
          })
          .pause(1000)
          .execute(() => {
            const el = document.querySelectorAll('button.swal-button.swal-button--confirm');
            el[0].click();
          })
          .end();
      });
    });
  });
};
export default deleteEventTest;
