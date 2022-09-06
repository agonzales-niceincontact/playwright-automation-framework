import axios from "axios";
import { EnvironmentData } from "@playwright/test/models";
import { CXSToken } from "@api-requests/cxs-requests/token.cxs";

export class AxiosConfigurator {
  private envConf: EnvironmentData;
  private basicToken: string = CXSToken.getBasicToken();

  public constructor(environmentConfig: EnvironmentData) {
    this.envConf = environmentConfig;
    axios.defaults.baseURL = this.envConf.domain;
    axios.defaults.headers.common.Authorization = this.basicToken;
    axios.defaults.validateStatus = function (status: number): boolean {
      return status >= 200 && status < 500;
    };
  }

  public async initApiConfig(): Promise<void> {
    const token = await CXSToken.getToken(this.envConf.username, this.envConf.password);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  public async cleanToken(): Promise<void> {
    axios.defaults.headers.common.Authorization = this.basicToken;
  }
}
