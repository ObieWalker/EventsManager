require('babel-register');

const editCenterTest = () => {
  describe('editing a center as admin', () => {
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
    describe('opens the users page', () => {
      it('Should modify user role', (browser) => {
        browser
          .url('http://localhost:3000/admin')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h4', 'Add Center Information')
          .assert.urlContains('http://localhost:3000/admin')
          .useXpath()
          .click('//div/ul/li/a[text()="Users"]')
          .pause(2000)
          .useCss()
          .execute(() => {
            const el = document.querySelectorAll('button.btn-warning.btn-sm.modi');
            el[0].click();
          })
          .pause(1000)
          .execute(() => {
            const el = document.querySelectorAll('button.swal-button.swal-button--confirm.swal-button--danger');
            el[0].click();
          })
          .end();
      });
    });
  });
};
export default editCenterTest;
