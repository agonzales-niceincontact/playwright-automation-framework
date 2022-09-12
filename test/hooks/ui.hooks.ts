import { After, Before, Status } from "@cucumber/cucumber";
import { browserPage } from "@driver/driver-manager";
import { Context } from "@playwright/test/models";

Before({ tags: "@UI" }, async function (this: Context) {
  await this.driver.start(this.environmentConfig);
});

After({ tags: "@UI" }, async function (this: Context) {
  await this.driver.close();
});

After({ tags: "@UI" }, async function (this: Context, scenarioContext) {
  if (scenarioContext.result?.status == Status.FAILED) {
    const image = await (await browserPage.getPage()).screenshot();
    this.attach(image, "image/png");
  }
});
