import { ElementType } from "@playwright/framework/ui/enums/";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class CXonePage extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    CXone: {
      name: "CXone Icon",
      locator: "//cxone-svg-sprite-icon[@iconname='icon-CXone_logo_white']/div",
      elementType: ElementType.Icon,
    },
    AppSelector: {
      name: "App Selector",
      locator: "div[aria-label='Open the CXone Help Center']",
      elementType: ElementType.Button,
    },
    List: {
      name: "Num LIst",
      locator: "//div[@class='dropdown']/select",
      elementType: ElementType.Dropdown,
    },
  };
  public pageName: string = "CXonePage";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
