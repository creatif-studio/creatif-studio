// Initializes the `apps` service on path `/apps`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Apps } from './apps.class';
import createModel from '../../models/apps.model';
import hooks from './apps.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'apps': Apps & ServiceAddons<any>;
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
  app.use('/apps', new Apps(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('apps');

  service.hooks(hooks);
}
