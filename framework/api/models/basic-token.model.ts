export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  resource_server_base_uri: string;
  refresh_token_server_uri: string;
  agent_id: number;
  team_id: number;
  bus_no: number;
}

export interface BasicToken {
  grant_type: string;
  username: string;
  password: string;
  scope: string;
}
