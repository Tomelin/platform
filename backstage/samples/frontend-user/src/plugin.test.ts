import { frontendUserPlugin } from './plugin';

describe('frontend-user', () => {
  it('should export plugin', () => {
    expect(frontendUserPlugin).toBeDefined();
  });
});
