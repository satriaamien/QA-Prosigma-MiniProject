const Page = require("./Page");

class CheckoutPage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get textItemCo() {
    return this.driver.$("id=product_quantity");
  }
  get allItem() {
    return this.driver.$("id=product_price");
  }
  get priceIncludeTax() {
    return this.driver.$("id=txt_total_price");
  }
  get deleteItem() {
    return this.driver.$("id=clear");
  }
  get notifDelete() {
    return this.driver.$("id=snackbar_text");
  }
  get emptyCart() {
    return this.driver.$("id=no_item_message");
  }
  get btnCart() {
    return this.driver.$("id=btn_add_cart");
  }
  get btnCart() {
    return this.driver.$("id=btn_add_cart");
  }
  get btnContinueShopping() {
    return this.driver.$("id=btn_continue");
  }

  // page actions
  async getTextItemCo() {
    return await this.textItemCo.getText();
  }
  async calculatePriceAllItem() {
    let totalItemCart;
    const tax = 0.1;
    const textTotalItemCart = await this.allItem.getText();

    totalItemCart = textTotalItemCart.match(/\d/g); //[[..],[..]]
    totalItemCart = parseInt(totalItemCart.join("")); //join without coma
    const percentageTax = totalItemCart * tax;
    const hasil = Math.ceil(percentageTax + totalItemCart); //bulatkan
    return hasil;
  }
  async getTextPriceIncludeTax() {
    return await this.priceIncludeTax.getText();
  }
  async getTextEmpty() {
    return await this.emptyCart.getText();
  }
  async clickDeleteItem() {
    await this.deleteItem.click();
  }
  async getTextNotifDelete() {
    return await this.notifDelete.getText();
  }
  async clickBtnCart() {
    await this.btnCart.click();
  }
  async clickbtnContinueShop() {
    await this.btnContinueShopping.click();
  }
}
// priceItemCart
// priceItemCart
module.exports = CheckoutPage;
