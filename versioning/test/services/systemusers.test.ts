import app from '../../src/app';

describe('\'systemusers\' service', () => {
  it('registered the service', () => {
    const service = app.service('systemusers');
    expect(service).toBeTruthy();
  });
});
