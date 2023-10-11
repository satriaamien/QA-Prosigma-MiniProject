const { By, Key, until, EC } = require("selenium-webdriver");
const Page = require("./Page");

class DetailItemPage extends Page {
  //! initialization
  constructor(driver) {
    super(driver);
  }

  //! element locators
  detailItem = By.css(".item_detail_information.clearfix");
  plus = By.css("span[data-action='sum']");
  minus = By.css("#minus");
  love = By.css(".addShoppingList");
  addToCart = By.css(".addToCart");
  goToCart = By.css(".goToCart");
  textItemProduct = By.css("#productSelected .itemInfo");
  textCount = By.css(".itemCounter #count_10521943");
  textCountWithoutLogin = By.css(".itemCounter #count_90289266");
  textLoveWithoutLogin = By.css(
    ".d-none.d-lg-block.ml-2.favourites-notification"
  );
  textLove = By.css(
    ".container.headerMenuProducts .iconFavourite-lg.cart.full #numItems"
  );
  textCart = By.css("#iconShoppingDesktop");
  wrapRincian = By.css(".nav.flex-column.align-items-end");
  arrowRincianProduk = By.css(
    ".nav a:nth-child(1) .icon.fundament-icon-chevron-right"
  );
  arrowUkuran = By.css(
    ".nav a:nth-child(2) .icon.fundament-icon-chevron-right"
  );
  arrowReviews = By.css(
    ".nav a:nth-child(3) .icon.fundament-icon-chevron-right"
  );
  closeModal = By.css("#modal-product-details .close-legend");
  closeModal2 = By.css("#modal-measurements .card-header.close button");
  closeModal3 = By.css("#modal-reviews .icon");

  titleRincian = By.css("#productDetails");
  titleUkuran = By.css("#modal-measurements .sidenav-col");
  titlereview = By.css("#modal-reviews .sidenav-col");

  stokBarang = By.css(".mt-2.mb-2.shop .status__label span");
  //! page action
  async endpointPisauPage() {
    this.openUrl("/produk/peralatan-dapur/pisau/vorda-art-90289266");
  }

  async scroll() {
    const js_code = "arguments[0].scrollIntoView();";
    const wraplist = await this.driver.findElement(this.detailItem);
    await this.driver.executeScript(js_code, wraplist);
  }
  async scrollRincian() {
    const js_code = "arguments[0].scrollIntoView();";
    const wraplist = await this.driver.findElement(this.wrapRincian);
    await this.driver.executeScript(js_code, wraplist);
  }
  async clickPlus() {
    await this.driver.findElement(this.plus).click();
  }
  async clickMinus() {
    await this.driver.findElement(this.minus).click();
  }
  async clickLove() {
    await this.driver.findElement(this.love).click();
  }
  async clickAddToCart() {
    await this.driver.findElement(this.addToCart).click();
  }
  async clickNextCart() {
    const btnAddCart = this.driver.findElement(this.goToCart);
    // await this.driver.wait(until.elementIsVisible(btnAddCart), 6000);
    await btnAddCart.click();
    // const waitBtn = this.driver.wait(until.elementLocated(this.goToCart), 6000);
    // return waitBtn.click();
  }
  async clickRincian() {
    await this.driver.findElement(this.arrowRincianProduk).click();
  }
  async clickRevies() {
    await this.driver.findElement(this.arrowReviews).click();
  }
  async clickCloseModal() {
    const modal = await this.driver.findElement(this.closeModal);
    await this.driver.wait(until.elementIsVisible(modal), 2000);
    await modal.click();
    //// await this.driver.findElement(this.closeModal).click();
  }
  async clickCloseModal2() {
    const modal2 = await this.driver.findElement(this.closeModal2);
    await this.driver.wait(until.elementIsVisible(modal2), 3000);
    await modal2.click();
    //// await this.driver.findElement(this.closeModal2).click();
  }
  async clickCloseModal3() {
    const modal3 = await this.driver.findElement(this.closeModal3);
    await this.driver.wait(until.elementIsVisible(modal3), 3000);
    await modal3.click();
  }
  async clickUkuran() {
    const btnUkuran = await this.driver.wait(
      until.elementLocated(this.arrowUkuran),
      4000
    );
    await btnUkuran.click();
    //// await this.driver.findElement(this.arrowUkuran).click();
  }
  async clickReview() {
    await this.driver.findElement(this.arrowReviews).click();
  }

  async getTextItemProduct() {
    return await this.driver.findElement(this.textItemProduct).getText();
  }
  async getTextCount() {
    return await this.driver.findElement(this.textCount).getAttribute("value");
  }
  async getTextCountWithoutLog() {
    return await this.driver
      .findElement(this.textCountWithoutLogin)
      .getAttribute("value");
  }
  async getTextLove() {
    return await this.driver.findElement(this.textLove).getText();
  }
  async getTextLoveWithoutLog() {
    return await this.driver.findElement(this.textLoveWithoutLogin).getText();
  }
  async getTextCart() {
    return await this.driver.findElement(this.textCart).getText();
  }
  async getTextextTitleRincian() {
    return await this.driver.findElement(this.titleRincian).getText();
  }
  async getTextextTitleUkuran() {
    const ukuran = await this.driver.findElement(this.titleUkuran);
    await this.driver.wait(until.elementIsVisible(ukuran), 5000);
    return await ukuran.getText();
    //// return await this.driver.findElement(this.titleUkuran).getText();
  }
  async getTextReview() {
    const review = await this.driver.findElement(this.titlereview);
    await this.driver.wait(until.elementIsVisible(review), 5000);
    return await review.getText();
  }
  async getTextStokBarang() {
    return await this.driver.findElement(this.stokBarang).getText();
  }
}

module.exports = DetailItemPage;
