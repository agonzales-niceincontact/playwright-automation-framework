import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { BaseElement } from "@elements";
import { ActionPalette } from "@playwright/framework/ui/elements/cxs/action-palette.element";

defineStep(
  /^the user has added a "(\w+)" action to the script from action-palette$/,
  async (actionName: string) => {
    const targetLocator = await getElement<BaseElement>("WorkspaceEditor", "Workspace").getElementLocator();
    await getElement<ActionPalette>("ActionPalette", "Workspace").dragActionIntoWorkspace(actionName, targetLocator);
  }
);
