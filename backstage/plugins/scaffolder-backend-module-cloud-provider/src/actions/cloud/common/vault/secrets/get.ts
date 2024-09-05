import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { Config } from '@backstage/config';
import { Logger } from 'winston';
import axios from 'axios';
import qs from 'qs';
import { AzureAccessToken, CloudCredentials, AzureSecret, AzureSecrets, CloudSecrets } from '../interface';
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
      
      if ((ctx.input.cloudProvider !== 'azure') && (ctx.input.cloudProvider !== 'aws')) {
        ctx.logger.error(
          `The cloud provider not found.`,
        );
        throw new Error("Credentials not found");
      }
      
      const { cloudProvider } = ctx.input

      const result1 = config.getOptionalConfigArray('cloud.azure.credentials') ?? []
      ctx.logger.info(JSON.stringify(result1))
      const result2 = config.getOptionalConfigArray('cloud.azure') ?? []
      ctx.logger.info(JSON.stringify(result2))
      const azure1  = config.getOptionalConfigArray(`azure`) 
      ctx.logger.info(JSON.stringify(azure1))
      const azure  = config.getOptionalConfigArray(`azure.credentials`) 
      ctx.logger.info(JSON.stringify(azure))
      const cloud1 = config.getOptionalConfigArray(`cloud`)
      ctx.logger.info(JSON.stringify(cloud1))
      const cloud: CloudCredentials[] = config.getOptionalConfigArray(`cloud.${cloudProvider.toLowerCase()}`) as unknown as CloudCredentials[] || []
      const cloud2: CloudCredentials = config.getOptionalConfigArray(`cloud.${cloudProvider.toLowerCase()}`) as unknown as CloudCredentials || {}

      // if (cloud.length == 0 || ){

      //   throw new Error("Credentials not found")
      // }

ctx.logger.info(JSON.stringify(cloud))
ctx.logger.info(JSON.stringify(cloud2))
throw new Error("Credentials not found")
// if (cloud.length === 0 || !cloud.some(c => c.credentials && c.credentials.clientId)) {
//   throw new Error("Credentials not found");
// }

      const result = cloud.credentials

      let credentials: CloudCredentials =  result[0]['data']
      
      
      // ################ STARTS VALIDATIONS ################  
      if (cloud.vault){
        ctx.logger.info(`${cloud.vault} Vault was found.`)
      }else{
        ctx.logger.error("The secret to access the vault has not been set up.")
        throw new Error(`Vault was not found in ${cloudProvider}.`)
      } 
      

      let secrets;
      if (cloudProvider.toLowerCase() === 'azure'){
        secrets = await azureVaultSecretsGet(cloud)
      }else if (cloudProvider.toLowerCase() === 'aws'){
        secrets= await awsVaultSecretsGet(cloud)
      }
      
      secrets.value.map((value) => {
          ctx.output(value.tags['field'],value['value'] )
        })
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  });
}



const getAzureToken = async(credentials: CloudCredentials) => {

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

const azureVaultSecretsGet = async(cloud: CloudCredentials) => <CloudSecrets>{}

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