import { AxiosConfigurator } from "@api-requests/config/axios-configurator";
import { World } from "@cucumber/cucumber";
import { DriverManager } from "@driver/driver-manager";
import { EnvironmentData } from "@playwright/test/models";

export interface Context extends World {
  driver: DriverManager;
  apiClient: AxiosConfigurator;
  environmentConfig: EnvironmentData;
  scenarioContext: { [id: string]: unknown };
}
