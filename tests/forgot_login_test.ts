Feature('forgot_login');

const { falseLoginUser } = require('../data/login')

Scenario('forgot login invalid credential',  ({ I, loginPage, homePage, loginRecuperationPage }) => {
    homePage.clickEnterButton();
    loginPage.clickForgotLogin();
    loginRecuperationPage.confirmForgotLogin(falseLoginUser);
    loginPage.seeNotification();

    I.closeApp;
});

Scenario('forgot login success',  ({ I, loginPage, homePage, loginRecuperationPage }) => {
    homePage.clickEnterButton();
    loginPage.clickForgotLogin();
    loginRecuperationPage.confirmForgotLogin(falseLoginUser);
    loginPage.seeNotification();

    I.closeApp;
});