// Initializes the `email verifications` service on path `/email-verifications`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { EmailVerifications } from './email-verifications.class';
import createModel from '../../models/email-verifications.model';
import hooks from './email-verifications.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'email-verifications': EmailVerifications & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    lean: { virtuals: true }
  };

  // Initialize our service with any options it requires
  app.use('/email-verifications', new EmailVerifications(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('email-verifications');

  service.hooks(hooks);
}
