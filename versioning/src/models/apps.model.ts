// apps-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'apps';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const mongooseVirtuals = require('mongoose-lean-virtuals');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, required: true },
    domain: { type: String },
    type: { type: String, required: true },
    serverId: { type: String, required: true },
    systemuserId: { type: String, required: true },
    userId: { type: String, required: true },
    status: { type: String }
  }, {
    timestamps: true,
    collection: 'apps'
  });

  schema.virtual('id').get(function(this: any) {
    return this._id
  })

  schema.virtual('server', {
    ref: 'servers',
    localField: 'serverId',
    foreignField: '_id',
    justOne: true,
    options: {
      select: 'name ip'
    }
  })

  schema.virtual('systemUser', {
    ref: 'systemusers',
    localField: 'systemuserId',
    foreignField: '_id',
    justOne: true,
    options: {
      select: 'username'
    }
  })

  schema.virtual('totalDatabases', {
    ref: 'databases',
    localField: '_id',
    foreignField: 'appId',
    count: true
  })

  schema.virtual('databases', {
    ref: 'databases',
    localField: '_id',
    foreignField: 'appId',
  })
  
  schema.set('toObject', { virtuals: true })
  schema.set('toJSON', { virtuals: true })
  schema.plugin(mongooseVirtuals)


  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
