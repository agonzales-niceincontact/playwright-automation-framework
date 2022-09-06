import { cxsActionsIDs } from "@api-requests/api-resources/cxs-actions";
import { HttpManager } from "@api-requests/http-manager";
import { AxiosResponse } from "axios";

export class CXSActions {
  private static apiActionsURL: string = "/InContactAPI/services/v24.0/actions";

  public static async getAction(actionName: string, parameters = {}): Promise<AxiosResponse> {
    const actionID = cxsActionsIDs[actionName.toUpperCase()];
    return await HttpManager.get(`${this.apiActionsURL}/${actionID}`, parameters);
  }
}
