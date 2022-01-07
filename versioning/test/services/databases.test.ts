import app from '../../src/app';

describe('\'databases\' service', () => {
  it('registered the service', () => {
    const service = app.service('databases');
    expect(service).toBeTruthy();
  });
});
