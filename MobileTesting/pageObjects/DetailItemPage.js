const Page = require("./Page");

class DetailItemPage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get priceItem() {
    return this.driver.$("id=product_price");
  }

  get textDetailProduct() {
    return this.driver.$("id=product_name");
  }
  get addCart() {
    return this.driver.$("id=btn_add_cart");
  }
  get textPopup() {
    return this.driver.$("id=dialogTitle");
  }
  get orderValue() {
    return this.driver.$("id=com.solodroid.solomerce:id/userInputDialog");
  }
  get addPopupCart() {
    return this.driver.$("id=android:id/button1");
  }
  get cart() {
    return this.driver.$("id=cart");
  }

  // page actions
  async getTextPriceOneItem() {
    let price = await this.priceItem.getText();
    price = price.match(/\d/g);
    price = parseInt(price.join(""));
    return price;
  }
  async getTextDetailProduct() {
    return await this.textDetailProduct.getText();
  }
  async clickAddCart() {
    await this.addCart.click();
  }
  async getTextPopup() {
    return await this.textPopup.getText();
  }
  async fillOrderValue(value) {
    await this.orderValue.setValue(value);
  }
  async getTextOrderValue() {
    const text = await this.orderValue;
    await text.waitForExist({ timeout: 4000 });
    return await text.getText();
  }
  async clickAddCartPopup() {
    await this.addPopupCart.click();
  }
  async clickCart() {
    await this.cart.click();
  }
}
module.exports = DetailItemPage;
