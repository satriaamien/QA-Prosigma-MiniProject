const { expect } = require("chai");
const LoginPage = require("./pageObjects/LoginPage");
const setupDriver = require("./utils/setupDriver");
const { WebDriver } = require("selenium-webdriver");
const closeAds = require("./utils/closeAds");

describe("FT_002_LOGIN", () => {
  /**@type {WebDriver} */ let driver;
  /**@type {LoginPage} */ let loginPage;

  before(async () => {
    driver = await setupDriver();
    driver.manage().window().maximize();
    loginPage = new LoginPage(driver);

    await closeAds();
    await driver.sleep(4000);
  });
  beforeEach(async () => {
    await loginPage.endpointPage();
  });

  after(async () => {
    await driver.close();
  });

  describe("LGN_001 Percobaan nomor telepon kosong", () => {
    it("gagal login serta memunculkan Email is required", async () => {
      await loginPage.fillUsername("");
      await loginPage.fillPassword("@Samintho123");
      await loginPage.clickMasuk();
      const text = await loginPage.errorNotify();
      expect(text).equal("Email is required");
    });
  });
  describe("LGN_002 Percobaan password kosong", () => {
    it("gagal login serta memunculkan kata sandi salah", async () => {
      await loginPage.fillUsername("85163624243");
      await loginPage.fillPassword("");
      await loginPage.clickMasuk();
      const text = await loginPage.errorNotify();
      expect(text).equal("Nama akun atau kata sandi salah");
    });
  });
  describe("LGN_003 Percobaan nomor telepon password kosong", () => {
    it("gagal login serta memunculkan Email is required", async () => {
      await loginPage.fillUsername("");
      await loginPage.fillPassword("");
      await loginPage.clickMasuk();
      const text = await loginPage.errorNotify();
      expect(text).equal("Email is required");
    });
  });
  describe("LGN_004 Percobaan data valid", () => {
    it("Menampilkan Halaman Selamat Datang", async () => {
      await loginPage.fillUsername("85163624243");
      await loginPage.fillPassword("@Samintho123");
      await loginPage.clickMasuk();
      const text = await loginPage.getWelcome();
      expect(text).include("Selamat datang");
    });
  });
});
