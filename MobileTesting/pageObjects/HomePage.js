const Page = require("./Page");

class HomePage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get item() {
    return this.driver.$("id=search");
  }
  get searchInput() {
    return this.driver.$("id=search_src_text");
  }
  get enterKeys() {
    return this.driver.keys("\uE007");
  }
  get titleHome() {
    return this.driver.$(
      `//*/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.TextView`
    );
  }
  get item2() {
    return this.driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]"
    );
  }
  get item2Text() {
    return this.driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.TextView[1]"
    );
  }
  get layout() {
    return this.driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView"
    );
  }
  // page actions
  async getTextitem2() {
    return await this.item2Text.getText();
  }
  async getLayout() {
    return await this.layout.getText();
  }
  async getitem2() {
    return await this.item2.getText();
  }
  async clickItem2() {
    await this.item2.click();
  }
  async getTexttTitle() {
    return await this.titleHome.getText();
  }
  async clickSearch() {
    await this.item.click();
  }
  async fillSearchInput(value) {
    await this.searchInput.setValue(value);
  }
  async enter() {
    await this.enterKeys;
  }
}
module.exports = HomePage;
