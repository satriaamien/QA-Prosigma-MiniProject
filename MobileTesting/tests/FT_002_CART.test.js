const { expect } = require("chai");
const setupDriver = require("../Utils/setupDriver");
const CheckoutPage = require("../pageObjects/CheckoutPage");
const HomePage = require("../pageObjects/homePage");

describe("FT_002_CART", () => {
  /**@type {WebdriverIO.Browser} */ let driver;
  /**@type {CheckoutPage} */ let checkoutPage;
  /**@type {HomePage} */ let homePage;

  before(async () => {
    driver = await setupDriver();
    checkoutPage = new CheckoutPage(driver);
    homePage = new HomePage(driver);
  });
  describe("CART_001 percobaan melihat cart item yang kosong", () => {
    it("memunculkan tampilan your cart is empty", async () => {
      await checkoutPage.clickBtnCart();
      const text = await checkoutPage.getTextEmpty();
      // console.log("text ", text);
      expect(text).include("your cart is empty");
    });
  });
  describe("CART_002 percobaan menghapus item yang kosong", () => {
    it("memunculkan notif your cart is empty", async () => {
      await checkoutPage.clickDeleteItem();
      const text = await checkoutPage.getTextNotifDelete();
      expect(text).equal("Your cart is empty!");
    });
  });
  describe("CART_002 percobaan melanjutkan belanja", () => {
    it("menuju halaman beranda pembelanjaan E-Commerce Android", async () => {
      await checkoutPage.clickbtnContinueShop();
      const text = await homePage.getTexttTitle();
      expect(text).include("E-Commerce");
    });
  });
});
