import app from '../../src/app';

describe('\'email verifications\' service', () => {
  it('registered the service', () => {
    const service = app.service('email-verifications');
    expect(service).toBeTruthy();
  });
});
