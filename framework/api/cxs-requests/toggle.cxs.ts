import { HttpManager } from "@api-requests/http-manager";
import { ToggledFeatures } from "@api-requests/models";

export class CXSToggle {
  private static environments: { [id: string]: string } = {
    DO: "dev",
    SO: "staging",
    TO: "test",
  };

  public static async getToggles(environmentCluster: string): Promise<string[]> {
    let environment = "";
    Object.keys(CXSToggle.environments).forEach(key => {
      if (environmentCluster.includes(key)) environment = CXSToggle.environments[key];
    });

    const apiResponse = await HttpManager.get(`https://na1.${environment}.nice-incontact.com/config/toggledFeatures`);
    const toggles = apiResponse.data as ToggledFeatures;
    return toggles.toggledFeatures;
  }
}
