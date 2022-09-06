import { ElementType } from "@playwright/framework/ui/enums/";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class ManageUser extends BasePage {

  public elements: { [elementId: string]: ElementStructure } = {
    Filter: {
      name: "Dropdown Show Filter",
      locator: "//div[@class='dropdown']/select",
      elementType: ElementType.Dropdown,
    },
  };

  public pageName: string = "ManageUser";

  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
