const { I } = inject();

export = {
  forgotLoginOption: '//*[@resource-id="login_LoginScreen_forgotPasswordButton"]',
  notification: 'Seu login foi enviado para o email:',
  inputLogin: '//*[@resource-id="login_LoginScreen_NameInput"]',
  continueLoginButton: '//*[@text="CONTINUAR"]',

  confirmLogin: function(user: any) {
    I.waitForVisible(this.inputLogin, 30)
    I.fillField(this.inputLogin, user.name)
    I.waitForVisible(this.continueLoginButton, 30);
    I.click(this.continueLoginButton);
  },

  clickForgotLogin: function() {
    I.waitForVisible(this.forgotLoginOption, 30);
    I.click(this.forgotLoginOption);
  },

  seeNotification: function() {
    I.waitForText(this.notification, 30);
    I.see(this.notification);
  }
}
