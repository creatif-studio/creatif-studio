// Initializes the `forgot passwords` service on path `/forgot-passwords`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ForgotPasswords } from './forgot-passwords.class';
import createModel from '../../models/forgot-passwords.model';
import hooks from './forgot-passwords.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'forgot-passwords': ForgotPasswords & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/forgot-passwords', new ForgotPasswords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('forgot-passwords');

  service.hooks(hooks);
}
