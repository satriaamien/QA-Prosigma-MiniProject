const { By, until } = require("selenium-webdriver");
const Page = require("./Page");

class LoginPage extends Page {
  //! initialization
  constructor(driver) {
    super(driver);
  }

  //! element locators
  logoLogin = By.css(".iconUser-lg.auto_menu_ac.cart");
  username = By.css("#loginForm_email_family");
  password = By.css("#loginForm_password_family");
  masuk = By.css("#formLoginFamily #btnSendLoginFamily");

  textWelcome = By.css(".container.mb-5.welcome-message");
  errUser = By.css(".form-group.macroEmail-input-group.error .message");
  //! page action
  async endpointPage() {
    await this.openUrl("/client");
  }
  async clickLogoLogin() {
    await this.driver.findElement(this.logoLogin).click();
  }
  async fillUsername(username) {
    await this.driver.findElement(this.username).sendKeys(username);
  }
  async fillPassword(password) {
    await this.driver.findElement(this.password).sendKeys(password);
  }
  async clickMasuk() {
    await this.driver.findElement(this.masuk).click();
  }
  async getWelcome() {
    const text = this.driver.wait(until.elementLocated(this.textWelcome), 5000);
    return text.getText();
    // return await this.driver.findElement(this.textWelcome).getText();
  }
  async errorNotify() {
    const text = this.driver.wait(until.elementLocated(this.errUser), 2000);
    return text.getText();
  }
}

module.exports = LoginPage;
