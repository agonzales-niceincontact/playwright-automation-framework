import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class ApplicationMenuView extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    ApplicationMenu: {
      name: "Application Menu",
      locator: "//*[@class= 'app-picker-content']",
      elementType: ElementType.ApplicationsMenu,
    },
    CXoneStudioLauncher: {
      name: "CXone Studio Launcher",
      locator: "#select-webStudio",
      elementType: ElementType.Button,
    },
    ApplicationsTooltip: {
      name: "Applications Tooltip",
      locator: "//div[@class= 'tooltip-inner']",
      elementType: ElementType.Tooltip,
    },
  };
  public pageName: string = "ApplicationMenuView";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
