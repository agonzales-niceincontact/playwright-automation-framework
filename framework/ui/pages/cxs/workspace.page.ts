import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class Workspace extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    ActionPalette: {
      name: "New Script Button",
      locator: "div stx-wsp-action-tools",
      elementType: ElementType.ActionPalette,
    },
    WorkspaceEditor: {
        name: "Workspace Editor",
        locator: "stx-workspace-editor > div",
        elementType: ElementType.ActionPalette,
      },
  };
  public pageName: string = "Workspace";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
