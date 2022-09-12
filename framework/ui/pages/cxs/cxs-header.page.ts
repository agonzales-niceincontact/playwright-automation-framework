import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class CXSHeader extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    NewScript: {
      name: "New Script Button",
      locator: ".cxone-btn.btn-big.btn-primary",
      elementType: ElementType.Button,
    },
    Save: {
      name: "Save Button Top Bar",
      locator: "button.cxone-btn",
      elementType: ElementType.Button,
    },  
    SavesScriptIcon: {
      name: "Save Script Icon Top Bar",
      locator: "#mediatype-saved",
      elementType: ElementType.Icon,
    },      
  };
  public pageName: string = "CXSHeader Top Bar ";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
