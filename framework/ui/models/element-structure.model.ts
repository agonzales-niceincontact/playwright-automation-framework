import { ElementType } from "@playwright/framework/ui/enums";

export interface ElementStructure {
  name: string;
  locator: string;
  elementType: ElementType;
}
