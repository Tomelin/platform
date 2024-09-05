import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { Config } from '@backstage/config';
import { Logger } from 'winston';
import axios from 'axios';
import qs from 'qs';
import { AzureAccessToken, CloudCredentials, AzureSecret, AzureSecrets, CloudSecrets, AzureCredentials } from '../interface';
import {  } from '../interface/azureSecrets';

/**
 * Creates an `azure:keyvault` Scaffolder action.
 *
 * @remarks
 *
 * See {@link https://example.com} for more information.
 *
 * @public
 */
export function cloudVaultSecretGet(config: Config) {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction<{
    cloudProvider: string;
  }>({
    id: 'cloud:vault:get',
    description: 'Get secret from Azure Key Vault',
    schema: {
      input: {
        required: [
          'cloudProvider',
        ],
        type: 'object',
        properties: {
          cloudProvider: {
            title: 'Cloud provider name',
            description: 'Cloud provider to get secrets',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
      
      if ((ctx.input.cloudProvider.toLowerCase() !== 'azure') && (ctx.input.cloudProvider.toLowerCase() !== 'aws')) {
        ctx.logger.error(
          `The cloud provider not found.`,
        );
        throw new Error("The cloud provider not found.");
      }
      
      const { cloudProvider } = ctx.input

      const result = config.getOptionalConfigArray(`cloud.${cloudProvider.toLowerCase()}.credentials`) as unknown as CloudCredentials[] || []
      if (!result){
        throw new Error("Credentials not found")
      }
      const cloud = result[0]
      ctx.logger.info("Credentials were found.")

      cloud.vault = config.getOptionalString(`cloud.${cloudProvider.toLowerCase()}.vault`) || ''
      if (!cloud.vault){
        throw new Error("Vault not found")
      }
      ctx.logger.info("Vault was found.")

      ctx.logger.info(`collecting secrets from ${cloudProvider}`)
      let secrets: AzureSecrets;
      if (cloudProvider.toLowerCase() === 'azure'){
        secrets = await azureVaultSecretsGet(ctx.logger, cloud)
      }else if (cloudProvider.toLowerCase() === 'aws'){
        secrets= await awsVaultSecretsGet(cloud)
      }
      
      await Promise.all(secrets.value.map((value) => {
          console.log(value.tags['field'],value.value)
          ctx.output(value.tags['field'],value.value)
        }))

        throw new Error(".... not found")

      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  });
}



const getAzureToken = async(credentials: AzureCredentials) => {

  let data = qs.stringify({
    'grant_type': 'client_credentials',
    'scope': 'https://vault.azure.net/.default',
    'client_id': credentials.client_id,
    'client_secret': credentials.client_secret
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://login.microsoftonline.com/${credentials.tenant}/oauth2/v2.0/token`,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  const token = await axios.request(config)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    throw new Error(error)
  });
  return token
}

const azureVaultSecretsGet = async(logger: Logger ,cloud: CloudCredentials): Promise<AzureSecrets> => {

  if (!cloud.data.client_id || !cloud.data.client_secret || !cloud.data.subscription || !cloud.data.tenant){
    throw new Error(`The credentials not valid`)
  }

  const token: AzureAccessToken = await getAzureToken(cloud.data)

  if (token.access_token === undefined && token.access_token === ""){
    logger.error(`Azure access token is empty or undefined ${token.access_token}`)
    throw new Error(`Azure access token is empty or undefined ${token.access_token}`)
  }

  const secrets: AzureSecrets = await getAzureKeyVaultSecrets(cloud.vault, token.access_token)

  await Promise.all(secrets.value.map(async (secret) =>{
    const result = await getAzureKeyVaultSecret(secret.id, token.access_token);
    secret.value = result.value;
  }))

  return secrets
}

const awsVaultSecretsGet = async(cloud: CloudCredentials) => <CloudSecrets>{}
const getAzureKeyVaultSecrets = async(vault: string, accessToken: string) => {


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://${vault}.vault.azure.net/secrets?api-version=7.2`,
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    }
  };
  
  const result = await axios.request(config)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    throw new Error(error)
  });

  return result
  
}

const getAzureKeyVaultSecret = async(vault: string, accessToken: string) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${vault}?api-version=7.2`,
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    }
  };
  
  const result:AzureSecret = await axios.request(config)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    throw new Error(error)
  });

  return result
  
}