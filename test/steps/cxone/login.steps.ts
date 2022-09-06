import { defineStep } from "@cucumber/cucumber";
import { Button, TextField } from "@elements";
import { getElement } from "@core/element-manager";
import { Context } from "@playwright/test/models";

defineStep("a user has logged in to CXone", async function (this: Context) {
  await getElement<TextField>("Username", "LoginPage").setText(this.environmentConfig.username);
  await getElement<Button>("Next", "LoginPage").click();
  await getElement<TextField>("Password", "LoginPage").setText(this.environmentConfig.password);
  await getElement<Button>("SignIn", "LoginPage").click();
});
