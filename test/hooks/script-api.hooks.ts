import {
  generalScript,
  callSuppressionScript,
  generalPhase1ActionsScript,
  generalPhase1ActionsEditedScript,
  generalPhase1ActionsScriptVariables,
} from "@api-requests/cxs-requests/body-requests";
import { CXSScript } from "@api-requests/cxs-requests/script.cxs";
import { After, Before } from "@cucumber/cucumber";
import { Context } from "@playwright/test/models";

Before(
  {
    tags: "@CreateScript or @CreateScriptCallSuppression or @CreateScriptPhase1Actions or @CreateScriptPhase1ActionsEdited or @CreateScriptPhase1ActionsVariables",
  },
  // eslint-disable-next-line max-lines-per-function
  async function (this: Context, testCase) {
    const scriptID = Math.floor(Math.random() * 1000);
    this.scenarioContext.autoScriptName = `auto-script-${scriptID}` as string;
    console.info(`the scriptName is -----> ${this.scenarioContext.autoScriptName}`);
    const tags = testCase.pickle.tags.map(tag => tag.name);

    if (tags.includes("@CreateScript")) {
      generalScript.header.scriptName = this.scenarioContext.autoScriptName as string;
      await CXSScript.createScript(generalScript);
    }

    if (tags.includes("@CreateScriptCallSuppression")) {
      callSuppressionScript.header.scriptName = this.scenarioContext.autoScriptName as string;
      await CXSScript.createScript(callSuppressionScript);
    }

    if (tags.includes("@CreateScriptPhase1Actions")) {
      generalPhase1ActionsScript.header.scriptName = this.scenarioContext.autoScriptName as string;
      await CXSScript.createScript(generalPhase1ActionsScript);
    }

    if (tags.includes("@CreateScriptPhase1ActionsEdited")) {
      generalPhase1ActionsEditedScript.header.scriptName = this.scenarioContext.autoScriptName as string;
      await CXSScript.createScript(generalPhase1ActionsEditedScript);
    }

    if (tags.includes("@CreateScriptPhase1ActionsVariables")) {
      generalPhase1ActionsScriptVariables.header.scriptName = this.scenarioContext.autoScriptName as string;
      await CXSScript.createScript(generalPhase1ActionsScriptVariables);
    }
  }
);

After(
  {
    tags: "@DeleteScript or @DeleteScriptCallSuppression or @DeleteScriptPhase1Actions or @DeleteScriptPhase1ActionsEdited or @DeleteScriptPhase1ActionsVariables",
  },
  async function (this: Context) {
    await CXSScript.unlockScript(
      this.scenarioContext.autoScriptName as string,
      this.scenarioContext.apiHeader as object
    );
    await CXSScript.deleteScript(this.scenarioContext.autoScriptName as string);
    this.scenarioContext.apiHeader = {};
  }
);
