// Initializes the `partners` service on path `/partners`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Partners } from './partners.class';
import createModel from '../../models/partners.model';
import hooks from './partners.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'partners': Partners & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/partners', new Partners(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('partners');

  service.hooks(hooks);
}
