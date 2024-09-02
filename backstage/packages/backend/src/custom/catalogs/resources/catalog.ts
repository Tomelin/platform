// packages/backend/src/processors/myProcessor.ts
import { CatalogProcessor, CatalogProcessorCache, CatalogProcessorEmit } from '@backstage/plugin-catalog-node';
import { Entity } from '@backstage/catalog-model';
import { LocationSpec } from '@backstage/plugin-catalog-common';

export class MyProcessor implements CatalogProcessor {
  getProcessorName(): string {
    return 'MyProcessor';
  }

  // Run first
  async preProcessEntity(
    entity: Entity,
    location: LocationSpec,
    emit: CatalogProcessorEmit,
    originLocation: LocationSpec,
    cache: CatalogProcessorCache,
  ): Promise<Entity> {
    return entity;
  }

  // Run after preProcess
  async validateEntityKind(entity: Entity): Promise<boolean> {
    // Return true if entity kind and it's fields are valid
    // and can be processed by this processor. Return false if the entity 
    // cannot be processed with this processor. Throw error if the entity
    // is invalid.
    return true;
  }

  // Run after validateEntityKind
  async postProcessEntity(
    entity: Entity,
    location: LocationSpec,
    emit: CatalogProcessorEmit,
    cache: CatalogProcessorCache,
  ): Promise<Entity> {
    return entity;
  }
}




// packages/backend/src/processors/myProcessor.ts
// Single user from https://jsonplaceholder.typicode.com/users
 interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// ...
  // This function creates Group entity object
function createCompanyGroup(user: User) {
    if (!user.company) {
      return null;
    }
    return {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Group',
      metadata: {
        // Allowed characters are [a-z0-9A-Z-_.]
        name: user.company.name.toLowerCase().replaceAll(/\s/g, '-'),
        title: user.company.name,
        description: user.company.catchPhrase,
        tags: user.company.bs.split(" "),
      },
      spec: {
        type: 'company',
        children: [],
      },
    };
  }

  async preProcessEntity(
    entity: Entity,
    location: LocationSpec,
    emit: CatalogProcessorEmit,
    originLocation: LocationSpec,
    cache: CatalogProcessorCache,
  ): Promise<Entity> {
    if (entity.kind.toLowerCase() !== 'user') {
      return entity;
    }
    // Add more checks for what entities to process if necessary

    // Fetch the user from it's origin location
    // For example https://jsonplaceholder.typicode.com/users/8
    const res = await fetch(originLocation.target, {
      method: 'get',
    });
    const user: User = await res.json();

    // Create company entity JSON object from the response
    const company = this.createCompanyGroup(user);
    if (!company) {
      // If the company info is missing, emit error
      emit(processingResult.notFoundError(originLocation, 'Company not found'));
      return entity;
    }

    // Create the actual company entity and emit it
    const companyResult = processingResult.entity(
      originLocation,
      company,
    ) as CatalogProcessorEntityResult;
    emit(companyResult);

    // Create entity references for company and user
    // These are needed to be able to create relations between the entities
    const companyEntityRef = getCompoundEntityRef(companyResult.entity);
    const userEntityRef = getCompoundEntityRef(entity);

    // Emit custom relationship between company group and users
    emit(
      processingResult.relation({
        source: companyEntityRef,
        target: userEntityRef,
        type: 'employs',
      }),
    );

    emit(
      processingResult.relation({
        source: userEntityRef,
        target: companyEntityRef,
        type: 'employedTo',
      }),
    );

    return entity;
  }
// ...


// Example of general error in processing
emit(
  processingResult.generalError(originLocation, 'Invalid company given'),
);
// Example of input error in processing
emit(
  processingResult.inputError(originLocation, 'Invalid input from service'),
);
// Emit new Location entity to the catalog which is fetched by Backstage
emit(
  processingResult.location({
    ...originLocation,
    target: 'https://jsonplaceholder.typicode.com/companies',
  }),
);
// Emit refresh for entity
emit(processingResult.refresh(stringifyEntityRef(entity)));