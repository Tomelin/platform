import {
  createRouter,
  providers,
  defaultAuthProviderFactories,
} from '@backstage/plugin-auth-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { DEFAULT_NAMESPACE, stringifyEntityRef } from '@backstage/catalog-model';
import { jwtDecode } from "jwt-decode";


export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    providerFactories: {
      ...defaultAuthProviderFactories,
      // auth0: providers.auth0.create({
      //   signIn: {
      //     resolver: async (info, ctx) => {
      //       const { profile: { email } } = info;
      //       if (!email) {
      //         throw new Error('User profile contained no email');
      //       }

      //       const [name] = email.split('@');
      //       // const [name] = info.profile.displayName || email.split('@');
      //       const userRef = stringifyEntityRef({
      //         kind: 'User',
      //         name: name,
      //         namespace: DEFAULT_NAMESPACE,
      //       });


      //       return ctx.issueToken({
      //         claims: {
      //           sub: userRef,
      //           ent: [userRef],
      //         }
      //       })
      //     },
      //   },
      // }),
      keycloak: providers.oidc.create({
        signIn: {
          resolver(info, ctx){
            let displayedEmail: string;

            if (info.result.userinfo.email){
              displayedEmail = info.result.userinfo.email;
            }else{
              displayedEmail = info.result.userinfo.sub;
            }

            const userRef = stringifyEntityRef({
              kind: 'User',
              name: displayedEmail,
              namespace: DEFAULT_NAMESPACE,
            });
            
            const token = info.result.tokenset.access_token || ''
            const groups = info.result.userinfo?.group
            env.logger.info(`displayName ${info.profile.displayName}`)
            env.logger.info(`email ${info.profile.email}`)
            env.logger.info(`picture ${info.result.userinfo['group']}`)
            env.logger.info(`picture ${groups['executer']}`)
            env.logger.info(`picture ${info.result.userinfo?.groups}`)
            env.logger.info(`tokenset ${info.result.tokenset}`)
            env.logger.info(`userinfo ${info.result.userinfo}`)
            env.logger.info(`access_token ${info.result.tokenset.access_token}`)

            return ctx.issueToken({
              claims: {
                token: info.result.tokenset.access_token || null,
                sub: userRef,
                ent: [userRef],
              }
            })
          }
        }
      })
    },
  });
}
