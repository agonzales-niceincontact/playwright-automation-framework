export interface Action {
  id: string;
  name: string;
  alias: string;
  version: number;
  implType: number;
  isStart: boolean;
  isEnd: boolean;
  loop: boolean;
  properties: { [id: string]: Property };
  branches: Branches;
}

export interface Property {
  name: string;
  type: string;
  displayControl: string;
  defaultValue: string;
  listType: string;
  readOnly: boolean;
  hidden: boolean;
  placeHolder: string;
}

export interface Branches {
  default: boolean;
  branch: Branch[];
  case: boolean;
}

export interface Branch {
  index: number;
  name: string;
  description: string;
}
