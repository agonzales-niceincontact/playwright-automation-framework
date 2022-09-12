import { ElementType } from "@playwright/framework/ui/enums";
import { BaseElement } from "@elements";
// import { ScriptFolderGridData } from "@playwright/framework/ui/models";
import { mouseDoubleClick } from "@events/mouse-events";

export class ScriptFoldersGrid extends BaseElement {
  private cellElementByName = "//div[text() = '{CELL_NAME}']";
  private cellElementByType = "//div[text() = '{CELL_NAME}']/preceding::div[1]/*/*/span[@id='mediatype-{CELL_TYPE}']";

  public constructor(name: string, locator: string) {
    super(name, locator, ElementType.ScriptFoldersGrid);
  }

  public async navigateTo(options: string[]): Promise<void> {
    for (const element of options) {
      const cell = await this.cellElementByName.replace("{CELL_NAME}", element.trim());
      await mouseDoubleClick(cell);
    }
  }

  // public async validateCells(rows: Array<ScriptFolderGridData>): Promise<boolean> {
  //   for (const row of rows) {
  //     //Map the locators based on the row data
  //     const elementTypeLocator = this.cellElementByType
  //       .replace("{CELL_NAME}", row.NAME)
  //       .replace("{CELL_TYPE}", row.TYPE);
  //     const elementNameLocator = this.cellElementByName.replace("{CELL_NAME}", row.NAME);

  //     //Wait for Selector
  //     await this.driver.waitForElement(elementTypeLocator);

  //     const elementType = (await this.driver.getPage()).locator(elementTypeLocator);
  //     const elementName = (await this.driver.getPage()).locator(elementNameLocator);

  //     // Verify if both elements are Visible
  //     if (!((await elementName.isVisible()) && (await elementType.isVisible()))) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
