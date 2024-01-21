import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      'app': 'bankeiro.apk',
      'platform': 'android',
      'device': 'emulator',
      'port': 4723,
      'path': '/wd/hub',
      desiredCapabilities: {
        //'appPackage': data.packageName,
        'deviceName': process.env.DEVICE || 'Emulator',
        'platformName': process.env.PLATFORM || 'android',
        'platformVersion': process.env.OS_VERSION || '11.0',
        'automationName': process.env.ENGINE || 'UIAutomator2',
        'avd': process.env.UDID || 'Pixel_2_API_33',
        'newCommandTimeout': 300000,
        'androidDeviceReadyTimeout': 300000,
        'androidInstallTimeout': 90000,
        'appWaitDuration': 300000,
        'autoGrantPermissions': true,
        'gpsEnabled': true,
        'isHeadless': false,
        'noReset': false,
        'noSign': true,
      }
    }
  },
  include: {
    I: './steps_file',
    homePage: "./pages/home.ts",
    loginPage: "./pages/login.ts",
    passwordPage: "./pages/password.ts",
    loginRecuperationPage: "./pages/loginRecuperation.ts",

    forgot_loginPage: "./pages/forgot_login.ts",
  },
  name: 'typescript-test'
}