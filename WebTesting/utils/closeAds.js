const { By, WebDriver, until } = require("selenium-webdriver");

const closeAds = async (drivers) => {
  /**@type {WebDriver} */ let driver = drivers;
  let textAds;
  let clickCloseAds;
  try {
    ads = await driver.wait(
      until.elementLocated(By.css(".dy-modal-contents")),
      5000
    );
    clickCloseAds = await driver.wait(
      until.elementLocated(By.css(".dy-modal-contents .dy-lb-close")),
      5000
    );
    textAds = await ads.getText();
  } catch (err) {
    // console.log("textAds", textAds);
  } finally {
    if (textAds) {
      await clickCloseAds.click();
    }
  }
};
module.exports = closeAds;

// async function getCloseAdBtn(driver) {
//   let button;
//   try {
//     // button = await driver.wait(
//     //   until.elementIsVisible(By.css(".dy-lb-close")),
//     //   7000
//     // );

//     button = await driver.wait(
//       until.elementIsVisible(By.css(".dy-lb-close")),
//       4000
//     );
//     // console.log("butonnn :", button);
//   } catch (err) {
//     button = false;
//   } finally {
//     return button;
//   }
// }

// async function closeAd(driver) {
//   const addBtn = await getCloseAdBtn(driver);

//   if (addBtn != false) {
//     await addBtn.click();
//   }
// }

// async function closeAds() {
//   let textAds;
//   let clickCloseAds;
//   try {
//     // await driver.sleep(2000);
//     // const btn = await driver.wait(
//     //   until.elementLocated(
//     //     By.css(".dy-modal-container.dy-act-overlay .dy-lb-close")
//     //   ),
//     //   5000
//     // );
//     textAds = await driver.wait(
//       until.elementLocated(By.css(".dy-modal-contents")),
//       5000
//     );
//     // await btn.click();
//     // const ads = await driver.findElement(By.css(".dy-modal-contents"));
//     clickCloseAds = await driver.wait(
//       until.elementLocated(By.css(".dy-modal-contents .dy-lb-close")),
//       5000
//     );
//     textAds = await ads.getText();
//   } catch (err) {
//     // console.log("textAds", textAds);
//     console.log("textAds", textAds);
//   } finally {
//     if (textAds) {
//       await clickCloseAds.click();
//     }
//   }
// }
