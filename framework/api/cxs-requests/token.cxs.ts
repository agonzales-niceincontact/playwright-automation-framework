/* eslint-disable max-lines-per-function */
import { HttpManager } from "@api-requests/http-manager";
import { BasicToken, Token } from "@api-requests/models";
import { AxiosResponse } from "axios";

export class CXSToken {
  private static basicToken: string =
    "basic aW50ZXJuYWxAaW5Db250YWN0IEluYy46UVVFNVFrTkdSRE0zUWpFME5FUkRSamczUlVORFJVTkRRakU0TlRrek5UYz0=";

  public static async getToken(usernameAccount: string, passwordAccount: string): Promise<string> {
    const header = {
      headers: {
        Authorization: CXSToken.basicToken,
      },
    };

    const getTokenRequest: BasicToken = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      grant_type: "password",
      username: usernameAccount,
      password: passwordAccount,
      scope: "RealTimeApi ChatApi CustomApi AdminApi AgentApi ReportingApi",
    };

    const response: AxiosResponse = await HttpManager.post<BasicToken>(
      "/InContactAuthorizationServer/Token",
      getTokenRequest,
      header
    );

    const bodyResponse: Token = (await response.data) as Token;
    return bodyResponse.access_token;
  }

  public static getBasicToken(): string {
    return CXSToken.basicToken;
  }
}
