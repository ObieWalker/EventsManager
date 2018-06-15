require('babel-register');

const loginTest = () => {
  describe('Test login page', () => {
    describe('fill login form and signin', () => {
      it('Should check if current page is the login page', (browser) => {
        browser
          .url('http://localhost:3000/')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h5', 'Sign in to your account.')
          .assert.urlContains('http://localhost:3000')
          .setValue('input[name=email]', '')
          .setValue('input[name=password]', '')
          .pause(5000);
      });
      it('Should try to submit without any inputs', (browser) => {
        browser
          .setValue('input[name=email]', '')
          .pause(1000)
          .setValue('input[name=password]', '')
          .pause(1000)
          .click('button[type=submit')
          .assert.containsText('#emailError', 'Your email is required')
          .assert.containsText('#passwordError', 'Password is required')
          .pause(1000);
      });
      it('Should try to submit form with invalid email', (browser) => {
        browser
          .setValue('input[name=email]', 'wrongemailtype@gmail')
          .pause(1000)
          .setValue('input[name=password]', 'password')
          .pause(1000)
          .click('button[type=submit')
          .assert.containsText('#emailError', 'The email is invalid')
          .pause(1000);
      });
      it('Should clear all fields in the login form', (browser) => {
        browser
          .clearValue('input[name=email]')
          .clearValue('input[name=password]');
      });
      it('Should submit the login form with correct data', (browser) => {
        browser
          .setValue('input[name=email]', 'isaac11walker@gmail.com')
          .pause(1000)
          .setValue('input[name=password]', 'password')
          .pause(1000)
          .click('button[type=submit')
          .pause(3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.urlContains('http://localhost:3000/dashboard')
          .pause(1000)
          .end();
      });
    });
  });
};

export default loginTest;
