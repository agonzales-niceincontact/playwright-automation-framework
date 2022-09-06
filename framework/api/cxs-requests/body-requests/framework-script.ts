/* eslint-disable max-lines */
export const frameworkScript = {
  header: {
    scriptName: "{{ScriptName}}",
    mediaType: 4,
    mediaTypeName: "call",
    purposeType: "Suppression",
    variableRedaction: 0,
    nextActionId: 7,
  },
  actions: {
    "1": {
      actionId: 1,
      libraryId: "B2F794C5-0232-40E7-9830-76D573BF57D7",
      name: "BEGIN",
      version: 1,
      label: "Begin",
      dependencyOrder: 0,
      implType: 0,
      x: 112,
      y: 144,
    },
    "2": {
      actionId: 2,
      libraryId: "E0E40C78-FF4B-4554-B403-34998A7039CF",
      name: "PERMITCALL",
      version: 1,
      label: "Permitcall",
      dependencyOrder: 1,
      implType: 0,
      x: 528,
      y: 96,
    },
    "3": {
      actionId: 3,
      libraryId: "51700E9F-8E82-4C38-A670-9B0F89D4E960",
      name: "SUPPRESSCALL",
      version: 1,
      label: "Suppresscall",
      dependencyOrder: 2,
      implType: 0,
      x: 528,
      y: 192,
    },
    "4": {
      actionId: 4,
      libraryId: "CA92D2F0-B9CD-4846-A958-CFDBF089C267",
      name: "CHECKCALLSUP",
      version: 1,
      label: "Checkcallsup",
      dependencyOrder: 3,
      implType: 0,
      x: 336,
      y: 144,
    },
    "5": {
      actionId: 5,
      libraryId: "B333DA63-33C8-4297-A58A-E9546CF7F0F2",
      name: "SNIPPET",
      version: 1,
      label: "Declare _prospectiveContact",
      dependencyOrder: 1,
      implType: 0,
      x: 112,
      y: 256,
    },
    "6": {
      actionId: 6,
      libraryId: "9015C095-98D9-441F-BF92-E90F5C5ED8C8",
      name: "ASSIGN",
      version: 1,
      label: "Assign dataValue",
      dependencyOrder: 2,
      implType: 0,
      x: 224,
      y: 144,
    },
  },
  properties: {
    "1": {
      "0": {
        name: "RootFolder",
        value: 0,
      },
      "1": {
        name: "Application",
        value: 0,
      },
      "2": {
        name: "ParamCount",
        value: 0,
      },
    },
    "2": {},
    "3": {
      "0": {
        name: "Disposition",
        value: "Default",
      },
    },
    "4": {
      "0": {
        name: "DataValue",
        value: "{dataValue}",
      },
    },
    "5": {
      "0": {
        name: "Data",
        value:
          "// It is necessary to declare the _prospectiveContact variable as a Dynamic to allow the Checkcallsup acion to compile\nDYNAMIC _prospectiveContact",
      },
      "1": {
        name: "MaxStringSize",
        value: "Limit2K",
      },
    },
    "6": {
      "0": {
        name: "Variable",
        value: "dataValue",
      },
      "1": {
        name: "Value",
        value: "{_prospectiveContact.CustomInfo.SuppressionField.$Value}",
      },
      "2": {
        name: "Type",
        value: "String",
      },
      "3": {
        name: "Publish",
        value: 0,
      },
      "4": {
        name: "ScreenPop",
        value: "False",
      },
      "5": {
        name: "SaveToDB",
        value: "False",
      },
      "6": {
        name: "MaxStringSize",
        value: "Limit2K",
      },
    },
  },
  branches: {
    "1": [
      {
        to: 6,
        label: 0,
        type: "default",
        index: 0,
      },
    ],
    "4": [
      {
        to: 3,
        label: "Found",
        type: "branch",
        index: 0,
      },
      {
        to: 2,
        label: "NotFound",
        type: "branch",
        index: 1,
      },
      {
        to: 3,
        label: "Error",
        type: "branch",
        index: 2,
      },
    ],
    "6": [
      {
        to: 4,
        label: 0,
        type: "default",
        index: 0,
      },
    ],
  },
};
