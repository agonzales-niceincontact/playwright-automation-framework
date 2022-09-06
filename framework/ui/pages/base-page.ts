import { ElementStructure } from "@playwright/framework/ui/models";

export abstract class BasePage {
  
  public elements!: { [elementId: string]: ElementStructure };
  public pageName!: string;

  protected validateDuplicateLocators(elements: { [elementId: string]: ElementStructure }, pageName: string): void {
    const locators: Array<string> = [];
    for (const elem in elements) {
      locators.push(elements[elem].locator);
    }

    const uniqueElements = new Set(locators);
    if (locators.length != uniqueElements.size) {
      throw new Error(`Elements on '${pageName}' contains duplicate locators`);
    }
  }
}
