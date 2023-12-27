# @internal/plugin-catalog-backend-module-users

## Create a new plugin with users name
yarn new --select backend-module --option id=catalog 

## Edit this file
backstage/packages/backend/src/plugins/catalog.ts
 and include this block
```
import { MyProvider } from '@internal/plugin-catalog-backend-module-users';

  const { scheduler, config } = env;
  const myProvider = new MyProvider(config,
    scheduler,
    );
  builder.addEntityProvider(myProvider);
```