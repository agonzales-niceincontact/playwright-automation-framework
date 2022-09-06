import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class HomePage extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    Token: {
      name: "Token",
      locator: "//textarea",
      elementType: ElementType.TextField,
    },
    LandingSelect: {
      name: "landing Option",
      locator: "//select",
      elementType: ElementType.Dropdown,
    },
    ManualAuthentication: {
      name: "Manual Authentication",
      locator: "//button[text() = 'Manual Authentication']",
      elementType: ElementType.Button,
    },
  };
  public pageName: string = "HomePage";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
