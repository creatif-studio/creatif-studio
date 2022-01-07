import app from '../../src/app';

describe('\'ssh keys\' service', () => {
  it('registered the service', () => {
    const service = app.service('ssh-keys');
    expect(service).toBeTruthy();
  });
});
