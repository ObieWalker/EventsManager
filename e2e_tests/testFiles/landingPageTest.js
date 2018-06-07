require('babel-register');

const landingPageTest = () => {
  describe('Test landing page', () => {
    describe('test landing page', () => {
      it('Should check the page', (browser) => {
        browser
          .url('http://localhost:3000')
          .waitForElementVisible('body', 3000)
          .assert.title('The Event Manager')
          .assert.visible('.nav-wrapper')
          .assert.containsText('h5', 'Sign in to your account.')
          .assert.urlContains('http://localhost:3000');
      });
    });
  });
};

export default landingPageTest;
