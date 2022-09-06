import { getElementTypeObject } from "@playwright/framework/ui/core/element-factory";
import { BasePage } from "@pages";
import { pages } from "@playwright/framework/ui/core/pages";

export class ElementManager {
  private views: { [id: string]: BasePage } = pages;

  public getElement<Type>(elementName: string, viewName: string): Type {    
    const view: BasePage = this.getView(viewName);
    const element = view.elements[elementName];
    if (element) return getElementTypeObject(element) as Type;
    throw new Error("No element found");
  }

  private getView(viewName: string): BasePage {
    const view = this.views[viewName];
    if (view) return this.views[viewName];
    throw new Error(`${viewName} not found`);
  }
}

export const getElement = <Type>(elementName: string, viewName: string): Type => {
  const element = new ElementManager();
  return element.getElement(elementName, viewName);
};
