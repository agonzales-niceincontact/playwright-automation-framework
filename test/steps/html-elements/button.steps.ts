import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { Button, Icon } from "@elements";

defineStep(
  /^the user(?: has)? (?:clicks|clicked) the '([\w+|\s+]+)'(?:(?: \w+)? on the '([\w+|\s+]+)')?$/,
  async (element: string, view: string) => {
    await getElement<Button | Icon>(element, view).click();
  }
);
