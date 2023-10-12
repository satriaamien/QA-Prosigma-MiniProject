const { expect } = require("chai");
const setupDriver = require("../Utils/setupDriver");
const HomePage = require("../pageObjects/homePage");

describe("FT_004_SEARCH", () => {
  /**@type {WebdriverIO.Browser} */ let driver;
  /**@type {HomePage} */ let homePage;

  before(async () => {
    driver = await setupDriver();
    homePage = new HomePage(driver);
  });

  describe("001_SEARCH input barang valid", () => {
    it("memunculkan barang dengan nama portable", async () => {
      await homePage.clickSearch();
      await homePage.fillSearchInput("portable");
      await homePage.enterKeys;
      const text = await homePage.getTextitem2();
      expect(text).include("Portable");
    });
  });
  describe("002_SEARCH input barang valid", () => {
    it("tidak dapat memunculkan list barang", async () => {
      await homePage.clickSearch();
      await homePage.fillSearchInput("portable..");
      await homePage.enterKeys;
      const text = await homePage.getLayout();
      expect(text).include("");
    });
  });
  describe("003_SEARCH input barang valid", () => {
    it("tidak dapat memunculkan list barang", async () => {
      await homePage.clickSearch();
      await homePage.fillSearchInput("t43tyw4tl[;/");
      await homePage.enterKeys;
      const text = await homePage.getLayout();
      expect(text).include("");
    });
  });
});
