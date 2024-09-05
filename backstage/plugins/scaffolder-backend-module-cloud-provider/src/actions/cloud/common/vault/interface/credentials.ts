export interface AzureCredentials {
  client_id?: string;
  client_secret?: string;
  subscription?: string;
  tenant?: string;
}

export interface CloudCredentials {
  credentials: AzureCredentials;
  vault: string;
}