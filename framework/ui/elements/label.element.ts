import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class Label extends BaseElement {
  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.Label);
  }
}
