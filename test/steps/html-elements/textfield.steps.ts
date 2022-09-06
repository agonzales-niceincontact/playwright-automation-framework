import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { TextField } from "@elements";
import { Context } from "@playwright/test/models";

defineStep(
  /^the user (?:has set|sets) the text "(.+?)" in the '([\w+|\s+]+)'(?: on the '(\w+)')?$/,
  async function (this: Context, inputText: string, element: string, view: string) {
    inputText = (inputText.includes("Password")) ? this.environmentConfig.password : inputText;
    await getElement<TextField>(element, view).setText(inputText);
  }
);
