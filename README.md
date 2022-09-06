# WebStudio - UI Automation framework

This project was implemented over [Playwright](https://playwright.dev/), [Axios](https://axios-http.com/) and [Cucumber JS](https://cucumber.io/)

First step, setup **playwright.config.json**:

```
{
 "username": "SET_USERNAME",
 "password": "SET_PASSWORD",
 "browser": "SET_BROWSER(chrome, firefox)",
 "domain":"SET_API_ENDPOINT_URL",
 "url": "SET_APP_URL",
}
```

In order to execute all the scenarios use the following command:

```
yarn e2e
```

To execute scenarios by tags use the following command:

```
npx cucumber-js --tags "@SCENARIO_TAG"
```

To execute the scenario under a specific environment use the following command:

```
npx cucumber-js --world-parameters '{\"cluster\":\"CLUSTER\",\"gbu\":\"GBU\",\"browser\":\"chrome\"}'
```

In case that don't specify the environment parameters(not use **--world-parameters**), the environment config data will be obtained from the **playwright.config.json** file

In order to add retry for flaky tests:
```
npx cucumber-js --retry "NUMBER_RETRIES"
```
In order to execute parallel tests:
```
npx cucumber-js --parallel "NUMBER_PARALLEL_EXECUTIONS"
```

**NOTE:** "**--world-parameters**" and "**--tags**" are optional parameters.

**--world-parameters:** Will be used to specify the environment.

**--tags:** Will be used to specify the set of test that will be executed.
