import { browserPage } from "@playwright/framework/ui/driver/driver-manager";
import { ActionPixelMovement, BoundingArea } from "@playwright/framework/ui/models";

const playwrightMoveOptions = { steps: 2 };

export const mouseDoubleClick = async (element: string): Promise<void> => {
  const page = await browserPage.getPage();
  await page.waitForSelector(element);
  await page.dblclick(element, { delay: 100 });
};

export const mouseHover = async (element: string): Promise<void> => {
  const page = await browserPage.getPage();
  await page.waitForSelector(element);
  await page.hover(element);
};

export const mouseDragAndDrop = async (sourceElement: string, targetElement: string): Promise<void> => {
  const page = await browserPage.getPage();  
  const sourceElementArea = await getMiddleElementCoordiantes(sourceElement);
  const targetElementArea = await getMiddleElementCoordiantes(targetElement);

  //Drag and Drop Action
  await page.mouse.move(sourceElementArea.x, sourceElementArea.y, playwrightMoveOptions);
  await page.waitForTimeout(2000);
  await page.mouse.down();
  await page.mouse.move(targetElementArea.x, targetElementArea.y, playwrightMoveOptions);
// await page.mouse.move(300, 100, playwrightMoveOptions);
  await page.mouse.up();
};

export const moveElementByPixel = async (element: string, elementArea: ActionPixelMovement): Promise<void> => {
  const page = await browserPage.getPage();
  const getElementCoordinates = await getMiddleElementCoordiantes(element);
  await page.mouse.click(getElementCoordinates.x, getElementCoordinates.y, { delay: 2000 });
  await page.mouse.down();
  await page.mouse.move(
    +elementArea.X + getElementCoordinates.x,
    +elementArea.Y + getElementCoordinates.y,
    playwrightMoveOptions
  );
  await page.mouse.up();
};

export const mouseHoverElement = async (element: string): Promise<void> => {
  const page = await browserPage.getPage();
  const getElementCoordinates = await getMiddleElementCoordiantes(element);
  await page.mouse.move(getElementCoordinates.x, getElementCoordinates.y);  
};

export const mouseDoubleClickElement = async (element: string): Promise<void> => {
  const page = await browserPage.getPage();
  const getElementCoordinates = await getMiddleElementCoordiantes(element);
  await page.mouse.dblclick(getElementCoordinates.x, getElementCoordinates.y, { delay: 2000 });
};

export const mouseClickElement = async (element: string): Promise<void> => {
  const page = await browserPage.getPage();
  const getElementCoordinates = await getMiddleElementCoordiantes(element);
  await page.mouse.click(getElementCoordinates.x, getElementCoordinates.y, { delay: 2000 });
};

export const scrollUntilFindElement = async (element: string): Promise<void> => {
  let findTries = 5;
  const page = await browserPage.getPage();

  do {
    await page.locator(element).scrollIntoViewIfNeeded();
    findTries -= 1;
  } while (!(await page.locator(element).isHidden()) && findTries > 0);

  if (await page.locator(element).isHidden()) throw new Error("Element was not found");
};

const getMiddleElementCoordiantes = async (element: string): Promise<BoundingArea> => {
  const page = await browserPage.getPage();
  const elementLocator = await page.locator(element).boundingBox();
  if (elementLocator) {
    const x: number = elementLocator.x + elementLocator.width / 2;
    const y = elementLocator.y + elementLocator.height / 2;
    return {x, y};
  } else {
    throw new Error("No Element Area were found");
  }
};
