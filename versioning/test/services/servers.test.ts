import app from '../../src/app';

describe('\'servers\' service', () => {
  it('registered the service', () => {
    const service = app.service('servers');
    expect(service).toBeTruthy();
  });
});
