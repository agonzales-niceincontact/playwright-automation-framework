import { browserPage, DriverManager } from "@playwright/framework/ui/driver/driver-manager";
import { ElementType } from "@playwright/framework/ui/enums";
import { Page } from "playwright";

export abstract class BaseElement {
  protected driver: DriverManager;
  protected elementType: ElementType;
  protected locator: string;
  protected name: string;
  public constructor(name: string, locator: string, elementType: ElementType) {
    this.name = name;
    this.locator = locator;
    this.elementType = elementType;
    this.driver = browserPage;
  }

  public async getElementLocator(): Promise<string> {
    return this.locator;
  }

  public async getElementTextContent(): Promise<string> {
    const elementText = await (await this.getDriverPage()).locator(this.locator).textContent();
    return String(elementText).trim();
  }

  public async isElementEnabled(): Promise<boolean> {
    return (await this.getDriverPage()).locator(this.locator).isEnabled();
  }

  public async isElementHidden(): Promise<boolean> {
    return (await this.getDriverPage()).locator(this.locator).isHidden();
  }

  public async isElementVisible(): Promise<boolean> {
    await (await this.getDriverPage()).waitForSelector(this.locator);
    return (await this.getDriverPage()).locator(this.locator).isVisible();
  }

  protected async getDriverPage(): Promise<Page> {
    return await this.driver.getPage();
  }
}
