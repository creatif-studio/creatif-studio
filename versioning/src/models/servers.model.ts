// server-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'servers';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const mongooseVirtuals = require('mongoose-lean-virtuals');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    ip: { type: String, required: true },
    name: { type: String },
    webServer: { type: String },
    userId: { type: String, required: true },
    apache: { type: Boolean },
    nginx: { type: Boolean },
    mysql: { type: Boolean },
    mongodb: { type: Boolean },
    docker: { type: Boolean },
    status: { type: String }
  }, {
    timestamps: true,
    collection: 'servers'
  });

  schema.virtual('id').get(function(this: any) {
    return this._id
  })

  schema.virtual('apps', {
    ref: 'apps',
    localField: '_id',
    foreignField: 'serverId',
    count: true
  })

  schema.virtual('systemUsers', {
    ref: 'systemusers',
    localField: '_id',
    foreignField: 'serverId',
    count: true
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
