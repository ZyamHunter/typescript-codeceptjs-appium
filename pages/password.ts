const { I } = inject();

export = {
  inputPassword: '//*[@resource-id="password_PasswordScreen_passwordInput"]',
  enterLoginButton: '//*[@text="Entrar"]',

  fillPassword: function(user: any) {
    I.waitForVisible(this.inputPassword, 30)
    I.fillField(this.inputPassword, user.password)
  },

  tryLogin: function() {
    I.waitForVisible(this.enterLoginButton, 30)
    I.click(this.enterLoginButton)
  }
}
