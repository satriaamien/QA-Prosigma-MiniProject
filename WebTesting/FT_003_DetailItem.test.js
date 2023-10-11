const { expect } = require("chai");
const setupDriver = require("./utils/setupDriver");
const { WebDriver } = require("selenium-webdriver");
const DetailItemPage = require("./pageObjects/DetailItemPage");

describe("FT_003_DETAIL_ITEM", () => {
  /**@type {WebDriver} */ let driver;
  /**@type {DetailItemPage} */ let detailItemPage;

  before(async () => {
    driver = await setupDriver();
    driver.manage().window().maximize();
    detailItemPage = new DetailItemPage(driver);

    await detailItemPage.endpointPisauPage();
    await driver.sleep(2000);
  });
  beforeEach(async () => {
    await driver.sleep(2000);
  });

  after(async () => {
    await driver.close();
  });

  describe("DTL_001 Percobaan pencet tombol tambah dan kurang ", () => {
    it("nilai berhasil ditambah dan dikurangi", async () => {
      await detailItemPage.clickPlus();
      const textPlus = await detailItemPage.getTextCountWithoutLog();
      console.log("textPlus ", textPlus);
      expect(textPlus).equal("2");
      await detailItemPage.clickMinus();
      const textMinus = await detailItemPage.getTextCountWithoutLog();
      expect(textMinus).equal("1");
    });
  });
  describe("DTL_002 Percobaan klik item disukai ", () => {
    it("nilai berhasil ditambah menjadi 1 di logo disukai", async () => {
      await detailItemPage.clickLove();
      await driver.sleep(2000);
      const text = await detailItemPage.getTextLoveWithoutLog();
      console.log("text", text);
      expect(text).include("1");
    });
  });
  describe("DTL_003 Percobaan klik Rincian Produk ", () => {
    it("memunculkan Detail Rincian Produk", async () => {
      await detailItemPage.scrollRincian();
      await driver.sleep(2000);
      await detailItemPage.clickRincian();
      const text = await detailItemPage.getTextextTitleRincian();
      expect(text).include("Rincian Produk");
      // console.log("text", text);
      await detailItemPage.clickCloseModal();
    });
  });
  describe("DTL_004 Percobaan klik Ukuran ", () => {
    it("memunculkan  Ukuran Produk", async () => {
      await detailItemPage.clickUkuran();
      const text = await detailItemPage.getTextextTitleUkuran();
      // console.log("texttt ", text);
      expect(text).include("Ukuran");
      await detailItemPage.clickCloseModal2();
    });
  });
  describe("DTL_5 percobaan klik Review", () => {
    it("memunculkan review product", async () => {
      await detailItemPage.clickReview();
      const text = await detailItemPage.getTextReview();
      // console.log(text);
      expect(text).include("Reviews");
      await detailItemPage.clickCloseModal3();
    });
  });
  describe("DTL_6 percobaan cek ketersediaan barang", () => {
    it("memunculkan Stok tersedia untuk pembelian Online", async () => {
      const text = await detailItemPage.getTextStokBarang();
      expect(text).equal("Stok tersedia untuk pembelian Online");
    });
  });
});
