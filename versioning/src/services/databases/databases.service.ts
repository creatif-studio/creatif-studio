// Initializes the `databases` service on path `/databases`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Databases } from './databases.class';
import createModel from '../../models/databases.model';
import hooks from './databases.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'databases': Databases & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/databases', new Databases(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('databases');

  service.hooks(hooks);
}
