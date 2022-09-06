import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class Tooltip extends BaseElement {
  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.Tooltip);
  }
}
