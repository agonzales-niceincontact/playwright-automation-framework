import { CXSToggle } from "@api-requests/cxs-requests/toggle.cxs";
import { defineStep } from "@cucumber/cucumber";
import { Context } from "@playwright/test/models";

defineStep(
  /^the feature toggle "([\w+|\s+|!.,?-]+)" has been enabled for the user's Business Unit$/,
  async function (this: Context, toggleName: string) {
    const toggles: string[] = await CXSToggle.getToggles(this.environmentConfig.cluster);
    if (!toggles.includes(toggleName)) {
      return "skipped";
    }
  }
);

defineStep(
  /^the feature toggle "([\w+|\s+|!.,?-]+)" has been disabled for the user's Business Unit$/,
  async function (this: Context, toggleName: string) {
    const toggles: string[] = await CXSToggle.getToggles(this.environmentConfig.cluster);
    if (toggles.includes(toggleName)) {
      return "skipped";
    }
  }
);
