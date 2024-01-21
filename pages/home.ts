const { I } = inject();

export = {
  enterButtonHome: '//*[@text="ENTRAR"]',

  clickEnterButton: function() {
    I.waitForVisible(this.enterButtonHome, 30);
    I.click(this.enterButtonHome);
  }
}
