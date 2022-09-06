import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { ApplicationsMenu, Button } from "@elements";
import { Context } from "@playwright/test/models";

defineStep(/^the user goes to '([\w|\s]+)'$/, async function (this: Context, application: string) {
    await getElement<Button>("AppSelector", "CXonePage").click();
    await getElement<ApplicationsMenu>("ApplicationMenu", "ApplicationMenu").openCXoneApplication(application);
});
