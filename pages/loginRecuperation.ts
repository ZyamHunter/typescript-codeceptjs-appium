const { I } = inject();

export = {
  inputCpfCnpj: '//*[@resource-id="recoverCpfCnpj_TaxIdScreen_cpfCnpjInput"]',
  recuperationButton: '//*[@resource-id="recoverCpfCnpj_TaxIdScreen_continueButton"]',

  confirmForgotLogin: function(user: any) {
    I.waitForVisible(this.inputCpfCnpj, 30);
    I.fillField(this.inputCpfCnpj, user.cnpj);
    I.waitForVisible(this.recuperationButton, 30);
    I.click(this.recuperationButton);
  },
}
