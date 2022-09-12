import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class WelcomePage extends BasePage {
  public pageName: string = "WelcomePage";

  public elements: { [elementId: string]: ElementStructure } = {
    ScriptFolder: {
      name: "ScriptFolder",
      locator: "//ag-grid-angular",
      elementType: ElementType.ScriptFoldersGrid,
    },
  };

  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
