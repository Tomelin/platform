import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { Config } from '@backstage/config';
import { Logger } from 'winston';
import axios from 'axios';
import qs from 'qs';
import { AzureAccessToken, AzureCredentials, AzureKeyVault } from '../../interface';
import { AzureSecret, AzureSecrets } from '../../interface/azureSecrets';

interface AzureConfig {
  credentials: AzureCredentials[];
  cloud: AzureKeyVault[];
}

interface DataConfig {
  data: AzureConfig;
}

/**
 * Creates an `azure:keyvault` Scaffolder action.
 *
 * @remarks
 *
 * See {@link https://example.com} for more information.
 *
 * @public
 */
export function createAzureKeyVaultAction(config: Config) {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction<{
    secretName: string;
    vaultName: string;
    subscription: string;
  }>({
    id: 'azure:keyvault',
    description: 'Get secret from Azure Key Vault',
    schema: {
      input: {
        type: 'object',
        properties: {
          secretName: {
            title: 'Secret name',
            description: 'Get secret from the secret name',
            type: 'string',
          },
          vaultName: {
            title: 'Vault name',
            description: 'Vault name to get secrets',
            type: 'string',
        },
        subscription: {
          title: 'Azure subscription',
          description: 'Subscription of the Azure Key Vault',
          type: 'string',
      },
        },
      },
    },
    async handler(ctx) {

      if (ctx.input.secretName === undefined){
        ctx.logger.info(
          `The code did not include a definition for the secret name.`,
        );  
      }
      
      if (ctx.input.vaultName === undefined){
        ctx.logger.info(
          `The code did not include a definition for the vault name.`,
        );  
      }
      
      const result = config.getOptionalConfigArray('cloud.azure.credentials') ?? []

  //     const keyValuePairs = result.map(item => {
  //       console.log(item)
  //       console.log(typeof item)
  //       ctx.logger.info(item)
  //       ctx.logger.info(typeof item)
  //       ctx.logger.info(Object.entries(item))
  //      return  Object.entries(item)
  // });
  //     ctx.logger.info(keyValuePairs);
  //     ctx.logger.info(JSON.stringify( result))
  //     ctx.logger.info(JSON.stringify(result[0]))
  //     ctx.logger.info(result.length)

      if (result.length !== 0){
        ctx.logger.info(`${result.length} secrets found`)
      }else{
        throw new Error("Not found secrets")
      }
      let credentials: AzureCredentials =  result[0]['data']
      
      
      // ################ STARTS VALIDATIONS ################  
      let vaultName: string = ""; 
      if (ctx.input.vaultName !== undefined && ctx.input.vaultName === ""){
        vaultName = ctx.input.vaultName 
      }
      else if (config.getOptionalString('cloud.azure.keyvault') !== undefined && config.getOptionalString('cloud.azure.keyvault') !== ""){
        vaultName = config.getOptionalString('cloud.azure.keyvault') || "";
      }else{
        ctx.logger.error("The secret to access the vault has not been set up.")
        throw new Error("Azure Key Vault did not informed")
      } 
      
      
      let subscription: string = ""; 
      if (ctx.input.subscription !== undefined && ctx.input.subscription === ""){
        subscription = ctx.input.subscription 
      }
      else if (credentials.subscription !== undefined && credentials.subscription !== ""){
        subscription = credentials.subscription;
      }else{
        ctx.logger.error("The subscription has not been set up.")
        throw new Error("Azure subscription did not informed")
      } 

      if (credentials.tenant === undefined && credentials.tenant === ""){
        ctx.logger.error("The subscription has not been set up.")
        throw new Error("Azure subscription did not informed")
      } 
      
      ctx.logger.info(
        `The vault name was established with: ${vaultName}`,
      );

      // ################ END VALIDATIONS ################

      const token: AzureAccessToken = await getAzureToken(credentials)

      if (token.access_token === undefined && token.access_token === ""){
        ctx.logger.error(`Azure access token is empty or undefined ${token.access_token}`)
        throw new Error(`Azure access token is empty or undefined ${token.access_token}`)
      }

      const secrets: AzureSecrets = await getAzureKeyVaultSecrets(vaultName, token.access_token)

      secrets.value.map((value) => {
        getAzureKeyVaultSecret(value.id, token.access_token)
        .then((result) => {
          ctx.output(value.tags['field'],result['value'] )
        })

      })
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