export interface ActionData {
  ActionName: string;
  ActionID: string;
}

export interface ActionPixelMovement extends ActionData {
  X: string;
  Y: string;
}

export interface ActionConnectionData {
  ActionConnection?: string;
  ActionID: string;
  ActionName: string;
  PortPosition: string;
}
