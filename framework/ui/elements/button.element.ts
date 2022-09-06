import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class Button extends BaseElement {
  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.Button);
  }

  public async click(): Promise<void> {
    const page = await this.driver.getPage();
    await page.click(this.locator);
  }
}
