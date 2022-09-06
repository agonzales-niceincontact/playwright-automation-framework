import { HttpManager } from "@api-requests/http-manager";
import { AxiosResponse } from "axios";

export class CXSActionPropertyQueries {
  private static apiActionsURL: string = "/InContactAPI/services/v24.0/action-property-queries";

  public static async getActionPropertyQuery(parameters = {}): Promise<AxiosResponse> {
    return await HttpManager.get(`${this.apiActionsURL}`, parameters);
  }
}
