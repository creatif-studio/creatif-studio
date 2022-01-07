import app from '../../src/app';

describe('\'tokens\' service', () => {
  it('registered the service', () => {
    const service = app.service('tokens');
    expect(service).toBeTruthy();
  });
});
