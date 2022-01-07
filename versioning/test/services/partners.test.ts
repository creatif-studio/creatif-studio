import app from '../../src/app';

describe('\'partners\' service', () => {
  it('registered the service', () => {
    const service = app.service('partners');
    expect(service).toBeTruthy();
  });
});
