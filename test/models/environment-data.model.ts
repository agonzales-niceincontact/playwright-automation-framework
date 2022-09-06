export interface ContextData {
  username: string;
  password: string;
  url: string;
  domain: string;
}

export interface EnvironmentData extends ContextData {
  browser: string;
  cluster: string;
  gbu: string;
}
