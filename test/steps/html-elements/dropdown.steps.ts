import { getElement } from "@core/element-manager";
import { defineStep } from "@cucumber/cucumber";
import { Dropdown } from "@elements";

defineStep(
  /^the user selects the "([\w+|\s+]+)" dropdown option in the '([\w+|\s+]+)'(?: on the '(\w+)')?$/,
  async (option: string, element: string, view: string) => {
    await getElement<Dropdown>(element, view).select(option);
  }
);
