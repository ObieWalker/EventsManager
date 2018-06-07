require('babel-register');

const addCenterTest = () => {
  describe('adding a center as admin', () => {
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
    describe('fill in add center form', () => {
      it('Should add center details', (browser) => {
        browser
          .url('http://localhost:3000/admin')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h4', 'Add Center Information')
          .assert.urlContains('http://localhost:3000/admin')
          .setValue('input[name=name]', 'Zanzibar Down')
          .setValue('input[name=address]', '15b, Asamali Koja Street')
          .setValue('input[name=city]', 'Ialakpa')
          .setValue('input[name=capacity]', 3000)
          .pause(1000)
          .setValue(
            'textarea[name=facility]',
            'This Center is equipped with 24 hour parking, a 50m square ' +
            'swimming pool and three smaller rooms.'
          )
          .pause(1000)
          .click('button[id=create-center')
          .pause(1000)
          .end();
      });
    });
  });
};
export default addCenterTest;
