/* eslint-disable max-lines */
export const generalScript = {
  header: {
    scriptName: "auto-script",
    busNo: 408,
    mediaType: 4,
    variableRedaction: "",
    nextActionId: 7,
  },
  actions: {
    "1": {
      actionId: 1,
      libraryId: "B2F794C5-0232-40E7-9830-76D573BF57D7",
      name: "BEGIN",
      version: 1,
      label: "Begin",
      dependencyOrder: "0",
      implType: "0",
      x: 144,
      y: 112,
    },
    "2": {
      actionId: 2,
      libraryId: "B1B9A2DD-65B6-4626-9CF5-9CFA69CF59E2",
      name: "PLAY",
      version: 1,
      label: "Play",
      dependencyOrder: "1",
      implType: "0",
      x: 320,
      y: 112,
    },
    "3": {
      actionId: 3,
      libraryId: "8E121149-83EF-40E0-8FFE-341DB5302671",
      name: "TTSVOICE",
      version: 1,
      label: "TTSVOICE",
      dependencyOrder: "2",
      implType: "0",
      x: 496,
      y: 112,
    },
    "4": {
      actionId: 4,
      libraryId: "9015C095-98D9-441F-BF92-E90F5C5ED8C8",
      name: "ASSIGN",
      version: 1,
      label: "Assign",
      dependencyOrder: "5",
      implType: "0",
      x: 320,
      y: 288,
    },
    "5": {
      actionId: 5,
      libraryId: "93FB8888-30CF-4DF3-8ED9-1F2986819080",
      name: "END",
      version: 1,
      label: "End",
      dependencyOrder: "4",
      implType: "0",
      x: 688,
      y: 192,
    },
    "6": {
      actionId: 6,
      libraryId: "DAEE9C00-12CE-4222-A42E-307C37D53B7F",
      name: "MENU",
      version: 1,
      label: "Menu",
      dependencyOrder: "3",
      implType: "0",
      x: 512,
      y: 288,
    },
  },
  properties: {
    "1": {
      "0": {
        name: "RootFolder",
        value: "",
      },
      "1": {
        name: "Application",
        value: "",
      },
      "2": {
        name: "ParamCount",
        value: "",
      },
    },
    "2": {
      "0": {
        name: "Sequence",
        value: "",
      },
      "1": {
        name: "Phrase",
        value: "",
      },
      "2": {
        name: "ClearDigits",
        value: "True",
      },
      "3": {
        name: "DetectDTMF",
        value: "True",
      },
      "4": {
        name: "SuppressSilence",
        value: "",
      },
      "5": {
        name: "TTSVolume",
        value: "",
      },
      "6": {
        name: "TTSRate",
        value: "",
      },
      "7": {
        name: "TTSVoice",
        value: "",
      },
    },
    "3": {
      "0": {
        name: "baseapiurl",
        value: "",
      },
      "1": {
        name: "vendor",
        value: "polly",
      },
      "2": {
        name: "voicename",
        value: "Joanna",
      },
    },
    "4": {
      "0": {
        name: "Variable",
        value: "B1",
      },
      "1": {
        name: "Value",
        value: "",
      },
      "2": {
        name: "Type",
        value: "String",
      },
      "3": {
        name: "Publish",
        value: "",
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
    "5": {},
    "6": {
      "0": {
        name: "Sequence",
        value: "",
      },
      "1": {
        name: "Phrase",
        value: "",
      },
      "2": {
        name: "ClearDigits",
        value: "True",
      },
      "3": {
        name: "MaxDigits",
        value: "1",
      },
      "4": {
        name: "Terminator",
        value: "#-",
      },
      "5": {
        name: "Timeout",
        value: "5",
      },
      "6": {
        name: "InterDigitTimeout",
        value: "5",
      },
      "7": {
        name: "Variable",
        value: "MRES",
      },
    },
  },
  branches: {
    "1": [
      {
        to: 2,
        label: "",
        type: "default",
        index: 0,
      },
    ],
    "2": [
      {
        to: 3,
        label: "",
        type: "default",
        index: 0,
      },
      {
        to: 4,
        label: "Digit",
        type: "branch",
        index: 0,
      },
    ],
    "3": [
      {
        to: 5,
        label: "",
        type: "default",
        index: 0,
      },
    ],
    "4": [
      {
        to: 6,
        label: "",
        type: "default",
        index: 0,
      },
    ],
    "6": [
      {
        to: 5,
        label: "",
        type: "default",
        index: 0,
      },
    ],
  },
};
