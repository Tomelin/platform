
// packages/backend/src/processors/myProcessor.ts
// Single user from https://jsonplaceholder.typicode.com/users
export interface User {
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
