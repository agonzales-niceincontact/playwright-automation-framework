import { BrowserType, chromium, Page, Browser, firefox, BrowserContext } from "playwright";
import { EnvironmentData } from "@playwright/test/models";

const playwrightBrowserResolution = { viewport: { width: 1920, height: 1080 } };
const waitForTime = 60000;

export class DriverManager {
  private browserType!: BrowserType;
  private browserDriver!: Promise<Browser>;
  private page!: Promise<Page> | Page;
  private context!: Promise<BrowserContext>;

  public async start(environmentConfig: EnvironmentData): Promise<void> {
    this.browserType = this.getBrowser(environmentConfig.browser);
    this.browserDriver = this.initBrowser(this.browserType);
    this.page = this.initPage(this.browserDriver);
    await (await this.getPage()).goto(environmentConfig.url, { timeout: waitForTime });
    await (await this.getPage()).waitForLoadState();
  }

  public async close(): Promise<void> {
    await (await this.browserDriver).close();
  }

  public async getPage(): Promise<Page> {
    return await this.page;
  }

  public async getBrowserDriver(): Promise<Browser> {
    return await this.browserDriver;
  }

  public async waitForElement(element: string): Promise<void> {
    await (await this.page).waitForSelector(element, { state: "visible", timeout: waitForTime });
  }

  public async switchWindow(): Promise<void> {
    const [newPage] = await Promise.all([(await this.context).waitForEvent("page")]);
    await newPage.waitForLoadState();
    this.page = newPage;
    this.page.setViewportSize(playwrightBrowserResolution.viewport);
  }

  public async getUrlPage(): Promise<string> {
    return (await this.page).url();
  }

  private async initPage(browser: Promise<Browser>): Promise<Page> {
    this.context = (await browser).newContext(playwrightBrowserResolution);
    return (await this.context).newPage();
  }

  private async initBrowser(browserType: BrowserType): Promise<Browser> {
    const browser = await browserType.launch({
      headless: false,
    });
    return browser;
  }

  private getBrowser(browserInput: string): BrowserType {
    switch (browserInput) {
      case "chrome": {
        return chromium;
      }
      case "firefox": {
        return firefox;
      }
      default: {
        console.error("Invalid Browser Input");
        return chromium;
      }
    }
  }
}

export const browserPage = new DriverManager();
