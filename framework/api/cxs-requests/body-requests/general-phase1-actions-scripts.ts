/* eslint-disable max-lines */
// API POST /Script body payload
// The Script contains Phase 1 Actions (Begin, Menu, Music, Reqagent, Wait, End). with default action properties values
export const generalPhase1ActionsScript = {
  header: {
    masterId: 46100,
    scriptName: "Auto-Basic_Actions_Script",
    mediaType: 4,
    mediaTypeName: "call",
    purposeType: "General",
    nextActionId: 7,
  },
  actions: {
    "1": {
      actionId: 1,
      libraryId: "B2F794C5-0232-40E7-9830-76D573BF57D7",
      name: "BEGIN",
      version: 1,
      label: "Begin",
      dependencyOrder: "1",
      implType: "0",
      x: 192,
      y: 208,
    },
    "2": {
      actionId: 2,
      libraryId: "DAEE9C00-12CE-4222-A42E-307C37D53B7F",
      name: "MENU",
      version: 1,
      label: "Menu",
      dependencyOrder: "0",
      implType: "0",
      x: 464,
      y: 208,
    },
    "3": {
      actionId: 3,
      libraryId: "DBCC742B-28D8-42D1-9D95-0D9ABF20B04B",
      name: "MUSIC",
      version: 1,
      label: "Music",
      dependencyOrder: "3",
      implType: "0",
      x: 640,
      y: 208,
    },
    "4": {
      actionId: 4,
      libraryId: "689A4A1B-FA0D-47B3-9A02-CBEB4735F08F",
      name: "REQAGENT",
      version: 1,
      label: "Reqagent",
      dependencyOrder: "2",
      implType: "0",
      x: 320,
      y: 208,
    },
    "5": {
      actionId: 5,
      libraryId: "5BF67B1C-9736-434D-9B6F-0D856AEA8F16",
      name: "WAIT",
      version: 1,
      label: "Wait",
      dependencyOrder: "4",
      implType: "0",
      x: 464,
      y: 320,
    },
    "6": {
      actionId: 6,
      libraryId: "93FB8888-30CF-4DF3-8ED9-1F2986819080",
      name: "END",
      version: 1,
      label: "End",
      dependencyOrder: "5",
      implType: "0",
      x: 640,
      y: 320,
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
      "3": {
        name: "Parameters",
        value: ["Param1", "Param2", "Param3", "Param4", "Param5", "Param6", "Param7", "Param8", "Param9", "Param0"],
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
    "3": {
      "0": {
        name: "MusicFile",
        value: "",
      },
      "1": {
        name: "StartOffset",
        value: "0",
      },
      "2": {
        name: "SecondstoPlay",
        value: "0",
      },
      "3": {
        name: "reserved1073742978",
        value: "",
      },
      "4": {
        name: "InterruptMessages",
        value: "",
      },
      "5": {
        name: "RepeatIndex",
        value: "",
      },
      "6": {
        name: "DetectDTMF",
        value: "False",
      },
      "7": {
        name: "ClearDigits",
        value: "True",
      },
    },
    "4": {
      "0": {
        name: "Skill",
        value: "Default",
      },
      "1": {
        name: "TargetAgent",
        value: "",
      },
      "2": {
        name: "PriorityManagement",
        value: "DefaultfromSkill",
      },
      "3": {
        name: "InitialPriority",
        value: "0",
      },
      "4": {
        name: "Acceleration",
        value: "1",
      },
      "5": {
        name: "Function",
        value: "",
      },
      "6": {
        name: "MaxPriority",
        value: "1000",
      },
      "7": {
        name: "Sequence",
        value: "",
      },
      "8": {
        name: "ZipTone",
        value: "AfterSequence",
      },
      "9": {
        name: "ScreenPopSource",
        value: "DefaultFromSkill",
      },
      "10": {
        name: "ScreenPopURL",
        value: "",
      },
      "11": {
        name: "HighProficiency",
        value: "1",
      },
      "12": {
        name: "LowProficiency",
        value: "20",
      },
      "13": {
        name: "RoutingAttribute",
        value: "",
      },
    },
    "5": {
      "0": {
        name: "Seconds",
        value: "5",
      },
    },
    "6": {},
  },
  branches: {
    "1": [
      {
        to: 4,
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
    ],
    "3": [
      {
        to: 6,
        label: "",
        type: "default",
        index: 0,
      },
    ],
    "4": [
      {
        to: 2,
        label: "",
        type: "default",
        index: 0,
      },
    ],
    "5": [
      {
        to: 2,
        label: "",
        type: "default",
        index: 0,
      },
    ],
  },
};
