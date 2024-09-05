export interface CloudSecrets {
  value: AzureSecret[];
}

export interface AzureSecrets {
  value: AzureSecret[];
}

export interface AzureSecret {
  value: string;
  contentType: string;
  id: string;
  attributes: AzureSecretAttributes;
  tags: AzureTags;
}

export interface AzureSecretAttributes {
  enabled: boolean;
  created: number;
  updated: number;
  recoveryLevel: string;
  recoverableDays: number;
}

export interface AzureTags {
  field: string;
}

