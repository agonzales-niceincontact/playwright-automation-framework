import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class Dropdown extends BaseElement {
  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.Dropdown);
  }

  public async select(option: string): Promise<void> {
    const page = await this.driver.getPage();
    await page.selectOption(this.locator, option);
  }
}
