import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { BaseElement } from "@elements";
import { assert } from "chai";

defineStep(
  /^the '([\w+|\s+]+)'(?: (?:\w+))? should (be|not be) displayed(?: on the '([\w+|\s+]+)')?$/,
  async (elementName: string, condition: string, viewName: string) => {    
    const expectedResponse = await getElement<BaseElement>(elementName, viewName).isElementVisible();
    if (condition.includes("not")) {
      assert.isFalse(expectedResponse, `Element '${elementName}' is displayed on '${viewName}' page`);
    } else {
      assert.isTrue(expectedResponse, `Element '${elementName}' is not displayed on '${viewName}' page`);
    }
  }
);

defineStep(
  /^the user should (see|not see) the '([\w+|\s+]+)'(?:(?:[\w+|\s+]+)?) displayed(?: on the '([\w+|\s+]+)')?$/,
  async (condition: string, elementName: string, viewName: string) => {    
    const expectedResponse = await getElement<BaseElement>(elementName, viewName).isElementVisible();
    if (condition.includes("not")) {
      assert.isFalse(expectedResponse, `Element '${elementName}' is displayed on '${viewName}' page`);
    } else {
      assert.isTrue(expectedResponse, `Element '${elementName}' is not displayed on '${viewName}' page`);
    }
  }
);

defineStep(
  /^the user should see the "([\w+|\s+|!.,?]+)" text in the(?: (?:[\w+|\s+]+))? '([\w+|\s+]+)'(?: on the '([\w+|\s+]+)')$/,
  async (expectedResponse: string, element: string, view: string) => {
    const actualResponse = await getElement<BaseElement>(element, view).getElementTextContent();
    assert.strictEqual(actualResponse, expectedResponse, `Notification text is not ${expectedResponse}`);
  }
);

defineStep(
  /^the user should not see the "([\w+|\s+|!.,?]+)" text in the(?: (?:[\w+|\s+]+))? '([\w+|\s+]+)'(?: on the '([\w+|\s+]+)')$/,
  async (expectedResponse: string, element: string, view: string) => {
    const actualResponse = await getElement<BaseElement>(element, view).getElementTextContent();
    const response = actualResponse.includes(expectedResponse);
    assert.isFalse(response, `Notification text is displayed ${expectedResponse}`);
  }
);

defineStep(
  /^the user should (see|not see) the(?:[\w|\s]*) '([\w+|\s+]+)' enabled in '([\w+|\s+]+)'$/,
  async (condition: string, elementName: string, viewName: string) => {
    const expectedResponse = await getElement<BaseElement>(elementName, viewName).isElementEnabled();
    if (condition.includes("not")) {
      assert.isFalse(expectedResponse, `the Element '${elementName}' is enabled on '${viewName}' page`);
    } else {
      assert.isTrue(expectedResponse, `the Element '${elementName}' is not enabled on '${viewName}' page`);
    }
  }
);

defineStep(/^the user waits "(\d+)" seconds*$/, async (seconds: string) => {
  await new Promise(resolve => setTimeout(resolve, +seconds * 1000));
});

defineStep(
  /^the user waits until (?:the \w+) '([\w+|\s+]+)' is not displayed in the '([\w+|\s+]+)'$/,
  async (elementName: string, viewName: string) => {
    let actualResponse = true;
    let tries = 5;
    do {
      actualResponse = await getElement<BaseElement>(elementName, viewName).isElementVisible();
      tries--;
      await new Promise(resolve => setTimeout(resolve, 3000));
    } while (actualResponse && tries > 0);
  }
);

defineStep(
  /^the user should (see|not see) the '([\w+|\s+]+)'(?: (?:\w+))? hidden(?: on the '([\w+|\s+]+)')?$/,
  async (condition: string, elementName: string, viewName: string) => {
    const expectedResponse = await getElement<BaseElement>(elementName, viewName).isElementHidden();
    if (condition.includes("not")) {
      assert.isFalse(expectedResponse, `Element '${elementName}' is hidden on '${viewName}' page`);
    } else {
      assert.isTrue(expectedResponse, `Element '${elementName}' is not hidden on '${viewName}' page`);
    }
  }
);
