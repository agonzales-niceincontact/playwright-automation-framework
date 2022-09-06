import { ElementStructure } from "@playwright/framework/ui/models";
import { ElementType } from "@playwright/framework/ui/enums";
import {
  BaseElement,
  Button,
  TextField,
  Dropdown,
  Tooltip,  
  ApplicationsMenu,  
  Icon,  
  Label,    
} from "@elements";

const elements: { [id: string]: ElementConstructor<BaseElement> } = {
  [ElementType.Button]: Button,
  [ElementType.TextField]: TextField,
  [ElementType.Dropdown]: Dropdown,
  [ElementType.Tooltip]: Tooltip,  
  [ElementType.Icon]: Icon,
  [ElementType.Label]: Label,  
  [ElementType.ApplicationsMenu]: ApplicationsMenu,
};

export const getElementTypeObject = (element: ElementStructure): unknown => {
  return new elements[element.elementType](element.name, element.locator);
};

type ElementConstructor<T> = new (name: string, locator: string) => T;
