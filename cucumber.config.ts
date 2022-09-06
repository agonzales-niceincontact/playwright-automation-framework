import { AxiosConfigurator } from "@api-requests/config/axios-configurator";
import { IWorldOptions, setDefaultTimeout, setWorldConstructor, World } from "@cucumber/cucumber";
import { browserPage, DriverManager } from "@driver/driver-manager";
import environmentData from "@playwright/environment.data.json";
import localConfig from "@playwright/playwright.config.json";
import { ContextData, EnvironmentData, CommandLineParameterData, Context } from "@playwright/test/models";

setDefaultTimeout(60 * 1000);

class CustomWorld extends World implements Context {
  public driver: DriverManager;
  public apiClient: AxiosConfigurator;
  public environmentConfig: EnvironmentData;
  public scenarioContext: { [id: string]: unknown } = {};

  public constructor(options: IWorldOptions) {
    super(options);

    // init configEnvironment
    this.environmentConfig = {
      username: localConfig.username,
      password: localConfig.password,
      url: localConfig.url,
      domain: localConfig.domain,
      browser: localConfig.browser,
      cluster: "",
      gbu: "",
    };

    this.setClusterData();
    this.driver = browserPage;
    this.apiClient = new AxiosConfigurator(this.environmentConfig);
  }

  private setClusterData(): void {
    const paramsData: CommandLineParameterData = this.parameters;
    const clustersData: { [clusterId: string]: ContextData } = environmentData;
    const environment = clustersData[`${paramsData.cluster}-${paramsData.gbu}`];

    if (environment) {
      this.environmentConfig = {
        username: environment.username,
        password: environment.password,
        url: environment.url,
        domain: environment.domain,
        browser: paramsData.browser,
        cluster: paramsData.cluster,
        gbu: paramsData.gbu,
      };
    }
  }
}

setWorldConstructor(CustomWorld);
