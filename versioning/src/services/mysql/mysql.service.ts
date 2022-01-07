// Initializes the `databases` service on path `/databases`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Mysql } from './mysql.class';
import createModel from '../../models/mysql.model';
import hooks from './mysql.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mysql': Mysql & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/mysql', new Mysql(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mysql');

  service.hooks(hooks);
}
