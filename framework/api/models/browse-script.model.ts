export interface ScriptFolder {
  totalRecords: number;
  _links: Links;
  businessUnitId: number;
  scriptList: ScriptList[];
}

export interface Links {
  self: string;
  next?: any;
  previous?: any;
}

export interface ScriptList {
  scriptName: string;
  masterID: number;
  createDate: string;
  modifyDate: string;
  mediaType: number;
  mediaTypeName: string;
  size: number;
  isFolder: boolean;
  hidden: boolean;
  readOnly: boolean;
  scriptLockingType: string;
  lockedBy?: any;
  modifiedBy: string;
}
