import app from '../../src/app';

describe('\'forgot passwords\' service', () => {
  it('registered the service', () => {
    const service = app.service('forgot-passwords');
    expect(service).toBeTruthy();
  });
});
