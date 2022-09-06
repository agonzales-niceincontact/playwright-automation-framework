import { After, Before } from "@cucumber/cucumber";
import { Context } from "@playwright/test/models";

Before({ tags: "@ApiClient" }, async function (this: Context) {
  await this.apiClient.initApiConfig();
});

After({ tags: "@ApiClient" }, async function (this: Context) {
  await this.apiClient.cleanToken();
});
