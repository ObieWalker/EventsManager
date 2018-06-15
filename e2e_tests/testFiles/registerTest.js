require('babel-register');


const registerTest = () => {
  describe('Test suite for register page', () => {
    describe('register a user', () => {
      it('Should check current page is the register page', (browser) => {
        browser
          .url('http://localhost:3000/register')
          .waitForElementVisible('body', 2000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('p', 'Already have an account?')
          .setValue('input[name=firstName]', '')
          .setValue('input[name=lastName]', '')
          .setValue('input[name=email]', '')
          .setValue('input[name=username]', '')
          .setValue('input[name=password]', '')
          .setValue('input[name=verifyPassword]', '')
          .pause(1000)
          .click('button[type=submit')
          .pause(1000)
          .assert.containsText('#firstNameError', 'Your first name is required')
          .assert.containsText('#lastNameError', 'Your last name is required')
          .assert.containsText('#emailError', 'Your email address is required')
          .assert.containsText(
            '#usernameError',
            'The username field is required'
          )
          .assert.containsText(
            '#passwordError',
            'Your password is required'
          );
      });
      it(
        'Should test the submit of the register form with wrong email format',
        (browser) => {
          browser
            .setValue('.firstName', 'testFN')
            .pause(1000)
            .setValue('.lastName', 'testLN')
            .pause(1000)
            .setValue('.username', 'testusername')
            .pause(1000)
            .setValue('.email', 'abademail@gma')
            .pause(1000)
            .setValue('input[name=password]', 'password')
            .pause(1000)
            .setValue('input[name=verifyPassword]', 'password')
            .pause(1000)
            .click('button[type=submit]')
            .pause(1000)
            .assert.containsText('#emailError', 'Invalid email address');
        }
      );
      it('Should clear all fields on form', (browser) => {
        browser
          .clearValue('.firstName')
          .clearValue('.lastName')
          .clearValue('.username')
          .clearValue('input[name=email]')
          .clearValue('input[name=password]')
          .clearValue('input[name=verifyPassword]');
      });
      it('Should submit the register form with correct data', (browser) => {
        browser
          .setValue('input[name=firstName]', 'Obi')
          .pause(1000)
          .setValue('input[name=lastName]', 'Walker')
          .pause(1000)
          .setValue('input[name=username]', 'obiwalker11')
          .pause(1000)
          .setValue('input[name=email]', 'isaac11walker@gmail.com')
          .pause(1000)
          .setValue('input[name=password]', 'password')
          .pause(1000)
          .setValue('input[name=verifyPassword]', 'password')
          .pause(1000)
          .click('button[type=submit]')
          .pause(3000)
          .end();
      });
    });
  });
};

export default registerTest;
