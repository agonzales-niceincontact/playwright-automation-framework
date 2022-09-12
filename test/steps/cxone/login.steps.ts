import { defineStep } from "@cucumber/cucumber";
import { BaseElement, Button, Dropdown, ScriptFoldersGrid, TextField } from "@elements";
import { getElement } from "@core/element-manager";
import { Context, ContextData } from "@playwright/test/models";
import { CXSToken } from "@api-requests/cxs-requests/token.cxs";
import environmentData from "@playwright/environment.data.json";

defineStep("a user has logged in to CXone", async function (this: Context) {
  await getElement<TextField>("Username", "LoginPage").setText(this.environmentConfig.username);
  await getElement<Button>("Next", "LoginPage").click();
  await getElement<TextField>("Password", "LoginPage").setText(this.environmentConfig.password);
  await getElement<Button>("SignIn", "LoginPage").click();
});


defineStep("the user has logged into CXone Studio", async function (this: Context) {
  if (this.environmentConfig.url.includes("localhost")) {

    // console.log("OPend by Local DO92")
    // const clustersData: { [clusterId: string]: ContextData } = environmentData;
    // const environmentInfo = clustersData[`${this.environmentConfig.cluster}-${this.environmentConfig.gbu}`];
    // await getElement<TextField>("Token", "HomePage").setText(await CXSToken.getToken(environmentInfo.username, environmentInfo.password));
    // await getElement<Dropdown>("LandingSelect", "HomePage").select("cxone");
    
    await getElement<Button>("ManualAuthentication", "HomePage").click();
    return;
  }

  //Set Credentials
  await getElement<TextField>("Username", "LoginPage").setText(this.environmentConfig.username);
  await getElement<Button>("Next", "LoginPage").click();
  await getElement<TextField>("Password", "LoginPage").setText(this.environmentConfig.password);
  await getElement<Button>("SignIn", "LoginPage").click();
  const appSelector = await getElement<BaseElement>("AppSelector", "CXonePage").getElementLocator();
  await this.driver.waitForElement(appSelector);

  // Go to WebStudio
  await getElement<Button>("AppSelector", "CXonePage").click();
  await getElement<Button>("CXoneStudioLauncher", "ApplicationMenu").click();
  await this.driver.switchWindow();
  const scriptFolderGrid = await getElement<BaseElement>("ScriptFolder", "WelcomePage").getElementLocator();
  await this.driver.waitForElement(scriptFolderGrid);
});

defineStep(
  /the user(?: has)? (?:navigates|navigated) to ({?(?:\w+|[-@*$%&#+])+}?(?: > {?(?:\w+|[-@*$%&#+])+}?)*)$/,
  async (options: string) => {
    await getElement<ScriptFoldersGrid>("ScriptFolder", "WelcomePage").navigateTo(options.split(" > "));
  }
);
