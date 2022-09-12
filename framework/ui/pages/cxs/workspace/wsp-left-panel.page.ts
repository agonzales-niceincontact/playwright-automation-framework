import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class WSPLeftPanel extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    MediaType: {
      name: "Media Type Icon",
      locator: "#mediatype-action",
      elementType: ElementType.Icon,
    },
  };
  public pageName: string = "WSPLeftPanel";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
