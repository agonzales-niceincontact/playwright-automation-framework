import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class TextField extends BaseElement {
  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.TextField);
  }

  public async getText(): Promise<string> {
    const page = await this.driver.getPage();
    return page.locator(this.locator).inputValue();
  }

  public async setText(inputText: string): Promise<void> {
    const page = await this.driver.getPage();
    await page.fill(this.locator, inputText);
  }
}
