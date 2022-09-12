import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";
import { mouseDragAndDrop, scrollUntilFindElement } from "../../events/mouse-events";

export class ActionPalette extends BaseElement {

  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.ActionPalette);
  }

  public async dragActionIntoWorkspace(actionName: string, targetElement: string): Promise<void> {    
    const locatorAction = this.getCXSActonLocator(actionName);
    await scrollUntilFindElement(locatorAction);
    mouseDragAndDrop(locatorAction, targetElement);    
  }

    private getCXSActonLocator = (actionName: string) => `//span[@class='action-name'][contains(text(), '${actionName}')]`;
}
