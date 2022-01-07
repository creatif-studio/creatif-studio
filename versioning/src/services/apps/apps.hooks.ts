import { HookContext } from '@feathersjs/feathers';
// Don't remove this comment. It's needed to format import lines nicely.

import isSystem from '../../hooks/isSystem';

export default {
  before: {
    all: [ isSystem() ],
    find: [ (context: HookContext): HookContext => {
      context.params.query = {
        ...context.params.query,
        $populate: ['server', 'systemUser', 'totalDatabases'],
        $select: '-__v'
      }
      return context;
    } ],
    get: [ (context: HookContext): HookContext => {
      context.params.query = {
        ...context.params.query,
        $populate: ['server', 'systemUser', 'databases'],
        // $select: '-__v'
      }
      return context;
    } ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
