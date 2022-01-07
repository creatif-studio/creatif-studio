import app from '../../src/app';

describe('\'apps\' service', () => {
  it('registered the service', () => {
    const service = app.service('apps');
    expect(service).toBeTruthy();
  });
});
