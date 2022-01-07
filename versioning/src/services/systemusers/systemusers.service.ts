// Initializes the `systemusers` service on path `/systemusers`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Systemusers } from './systemusers.class';
import createModel from '../../models/systemusers.model';
import hooks from './systemusers.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'systemusers': Systemusers & ServiceAddons<any>;
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
  app.use('/systemusers', new Systemusers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('systemusers');

  service.hooks(hooks);
}
