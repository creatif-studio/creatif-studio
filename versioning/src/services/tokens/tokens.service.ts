// Initializes the `tokens` service on path `/tokens`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Tokens } from './tokens.class';
import createModel from '../../models/tokens.model';
import hooks from './tokens.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tokens': Tokens & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/tokens', new Tokens(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tokens');

  service.hooks(hooks);
}
