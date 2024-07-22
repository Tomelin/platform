import {
  createRouter,
  providers,
  defaultAuthProviderFactories,
} from '@backstage/plugin-auth-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { DEFAULT_NAMESPACE, stringifyEntityRef } from '@backstage/catalog-model';
import { jwtDecode } from "jwt-decode";
import { profile } from 'winston';


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
      auth0: providers.auth0.create({
        signIn: {
          resolver: async (info, ctx) => {
            const { profile: { email } } = info;

            let name: string = '';
            if (!email) {
              name = info.result.fullProfile?.nickname;
            }else{
              name = email.split('@')[1];
            }

            // const [name] = email.split('@');
            // const [name] = info.profile.displayName || email.split('@');
            const userRef = stringifyEntityRef({
              kind: 'User',
              name: name,
              namespace: DEFAULT_NAMESPACE,
            });

            return ctx.issueToken({
              claims: {
                sub: userRef,
                ent: [userRef],
              }
            })
          },
        },
      }),
      github: providers.github.create({
        signIn: {
          resolver(_, ctx) {
            const userRef = 'user:default/guest'; // Must be a full entity reference
            return ctx.issueToken({
              claims: {
                sub: userRef, // The user's own identity
                ent: [userRef], // A list of identities that the user claims ownership through
              },
            });
          },
          // resolver: providers.github.resolvers.usernameMatchingUserEntityName(),
        },
      }),
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
