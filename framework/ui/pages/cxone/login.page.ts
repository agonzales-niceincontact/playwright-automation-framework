import { ElementType } from "@playwright/framework/ui/enums";
import { BasePage } from "@pages";
import { ElementStructure } from "@playwright/framework/ui/models";

export class LoginPage extends BasePage {
  public elements: { [elementId: string]: ElementStructure } = {
    Username: {
      name: "Username",
      locator: "#emailFieldNext",
      elementType: ElementType.TextField,
    },
    Next: {
      name: "Next",
      locator: "#nextBtn",
      elementType: ElementType.Button,
    },
    Password: {
      name: "Password",
      locator: "#mfaPassField",
      elementType: ElementType.TextField,
    },
    SignIn: {
      name: "Sign In",
      locator: "#mfaLoginBtn",
      elementType: ElementType.Button,
    },
  };
  public pageName: string = "LoginPage";
  public constructor() {
    super();
    this.validateDuplicateLocators(this.elements, this.pageName);
  }
}
