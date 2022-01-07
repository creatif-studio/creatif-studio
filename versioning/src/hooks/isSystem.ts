// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    try {
      const token = context.app.get('token')

      const accessToken = context.params.headers && context.params.headers.authorization && context.params.headers.authorization.replace("Bearer ", "")
      const isSystem = context.params.isSystem || (accessToken && accessToken === token)

      if(!isSystem){
        // await context.app.service('authentication').verifyAccessToken(accessToken)
        throw new Error('unAuthorized')
      };

      return context
  
    } catch (error) {
      throw new Error(error)
    }
  };
};
