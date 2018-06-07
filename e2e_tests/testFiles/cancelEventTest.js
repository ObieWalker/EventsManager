require('babel-register');

const cancelEventTest = () => {
  describe('canceling an event as admin', () => {
    describe('sign in as an admin', () => {
      it('Should sign in as an admin', (browser) => {
        browser
          .url('http://localhost:3000/')
          .useCss()
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h5', 'Sign in to your account.')
          .assert.urlContains('http://localhost:3000')
          .setValue('input[name=email]', 'adminuser@gmail.com')
          .setValue('input[name=password]', 'password')
          .click('button[type=submit')
          .pause(3000);
      });
    });
  });
  describe('cancel center', () => {
    it('Should delete the selected center', (browser) => {
      browser
        .url('http://localhost:3000/admin')
        .waitForElementVisible('body', 3000)
        .assert.title('The Event Manager')
        .assert.visible('.nav-wrapper')
        .assert.containsText('h4', 'Add Center Information')
        .assert.urlContains('http://localhost:3000/admin')
        .useXpath()
        .click('//div/ul/li/a[text()="Events"]')
        .pause(2000)
        .useCss()
        .execute(() => {
          const el = document.querySelectorAll('button.btn.btn-danger.btn-sm.btn-rounded');
          el[2].click();
        })
        .pause(1000)
        .execute(() => {
          const el = document.querySelectorAll('button.swal-button.swal-button--confirm');
          el[0].click();
        })
        .pause(2000)
        .end();
    });
  });
};
export default cancelEventTest;
