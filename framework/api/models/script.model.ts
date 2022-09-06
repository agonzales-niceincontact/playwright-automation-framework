export interface Script {
  header: Header;
  actions: { [id: string]: ScriptActions };
  properties: { [id: string]: { [id: string]: ScriptProperty } };
  branches: { [id: string]: ScriptBranch[] };
}

export interface Header {
  masterId: number;
  scriptName: string;
  busNo: number;
  mediaType: number;
  mediaTypeName: string;
  purposeType: string;
  variableRedaction: string;
  libraryId: string;
  lockInfo: LockInfo;
  nextActionId: number;
  status: string;
}

export interface LockInfo {
  lockedName: string;
  lockedId: string;
  lockedDate: string;
}

export interface ScriptActions {
  actionId: number;
  libraryId: string;
  name: string;
  version: number;
  label: string;
  dependencyOrder: string;
  implType: string;
  x: number;
  y: number;
}

export interface ScriptProperty {
  name: string;
  value: string;
}

export interface ScriptBranch {
  to: number;
  label: string;
  type: string;
  index: number;
}
