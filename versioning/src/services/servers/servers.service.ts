// Initializes the `servers` service on path `/servers`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Servers } from './servers.class';
import createModel from '../../models/servers.model';
import hooks from './servers.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'servers': Servers & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true },
    whitelist: [ '$populate' ]
  };

  // Initialize our service with any options it requires
  app.use('/servers', new Servers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('servers');

  service.hooks(hooks);
}
