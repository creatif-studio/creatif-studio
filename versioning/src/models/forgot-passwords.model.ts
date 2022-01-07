// forgot passwords-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'forgotPasswords';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const mongooseVirtuals = require('mongoose-lean-virtuals');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    token: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true }
  }, {
    timestamps: true,
    collection: 'forgotPasswords'
  });

  schema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 })

  schema.virtual('id').get(function(this: any) {
    return this._id
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
