import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";

export class ApplicationsMenu extends BaseElement {
  private optionIcon: string = "//div[@class = 'app-icon-panel ng-star-inserted']";
  private optionLabel: string = "//div[@class='app-name-panel ng-star-inserted']";
  private optionLocator: string = "//span[text() = '{OPTION}']";

  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.ApplicationsMenu);
  }

  public async openCXoneApplication(option: string): Promise<void> {
    const page = await this.driver.getPage();
    await page.waitForSelector(`${this.locator}`);
    await page.click(`${this.locator}${this.optionLocator.replace("{OPTION}", option)}`);
    await page.waitForSelector(this.optionIcon);
    await page.locator(this.optionLabel).isVisible();
  }
}
