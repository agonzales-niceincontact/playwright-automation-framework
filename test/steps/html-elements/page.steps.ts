import { defineStep } from "@cucumber/cucumber";
import { Context } from "@playwright/test/models";
import { assert } from "chai";

defineStep("the url page should contain {string}", async function (this: Context, url: string) {
  const currentUrl = await this.driver.getUrlPage();
  assert.isTrue(currentUrl.includes(url), `CurrentUrl '${currentUrl}' does not contains '${url}'`);
});
