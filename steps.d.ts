/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/home');
type loginPage = typeof import('./pages/login');
type passwordPage = typeof import('./pages/password');
type loginRecuperationPage = typeof import('./pages/loginRecuperation');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, loginPage: loginPage, passwordPage: passwordPage, loginRecuperationPage: loginRecuperationPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
