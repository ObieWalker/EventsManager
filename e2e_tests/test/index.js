require('babel-register');

const landingPageTest = require('../testFiles/landingPageTest').default;
const registerPageTest = require('../testFiles/registerTest').default;
const loginPageTest = require('../testFiles/loginTest').default;
const addEventTest = require('../testFiles/addEventTest').default;
const addCenterTest = require('../testFiles/addCenterTest').default;
const editCenterTest = require('../testFiles/editCenterTest').default;
const deleteCenterTest = require('../testFiles/deleteCenterTest').default;
const cancelEventTest = require('../testFiles/cancelEventTest').default;
const editUserRoleTest = require('../testFiles/editUserRoleTest').default;
const deleteUserTest = require('../testFiles/deleteUserTest').default;
const editEventTest = require('../testFiles/editEventTest').default;
const deleteEventTest = require('../testFiles/deleteEventTest').default;

const testLadingPage = () => {
  landingPageTest();
};

const testRegisterPage = () => {
  registerPageTest();
};
const testLoginPage = () => {
  loginPageTest();
};
const testBookEvent = () => {
  addEventTest();
};

const testAddCenter = () => {
  addCenterTest();
};

const testEditCenter = () => {
  editCenterTest();
};

const testDeleteCenter = () => {
  deleteCenterTest();
};

const testCancelEvent = () => {
  cancelEventTest();
};

const testEditUser = () => {
  editUserRoleTest();
};

const testDeleteUser = () => {
  deleteUserTest();
};

const testEditEvent = () => {
  editEventTest();
};

const testDeleteEvent = () => {
  deleteEventTest();
};

testLadingPage();
testRegisterPage();
testLoginPage();
testAddCenter();
testBookEvent();
testEditEvent();
testDeleteEvent();
testEditCenter();
testDeleteCenter();
testCancelEvent();
testEditUser();
testDeleteUser();

