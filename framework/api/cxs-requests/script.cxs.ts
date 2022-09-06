import { HttpManager } from "@api-requests/http-manager";
import { AxiosResponse } from "axios";

export class CXSScript {
  private static apiScriptURL: string = "/InContactAPI/services/v24.0/scripts";

  public static async getScript(parameters = {}): Promise<AxiosResponse> {
    return await HttpManager.get(`${this.apiScriptURL}`, parameters);
  }

  public static async createScript(postScriptBody = {}): Promise<void> {
    await HttpManager.post(CXSScript.apiScriptURL, { scriptContent: postScriptBody });
  }

  public static async deleteScript(scriptName: string): Promise<void> {
    const params = {
      scriptPath: scriptName,
    };
    await HttpManager.delete(CXSScript.apiScriptURL, params);
  }

  public static async unlockScript(scriptName: string, headers = {}): Promise<void> {
    const params = {
      scriptPath: scriptName,
      lockScript: false,
    };
    await HttpManager.put(CXSScript.apiScriptURL, params, headers);
  }

  public static async lockScript(scriptName: string, headers = {}): Promise<void> {
    const params = {
      scriptPath: scriptName,
      lockScript: true,
    };
    await HttpManager.put(CXSScript.apiScriptURL, params, headers);
  }
}
