// users-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'users';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const mongooseVirtuals = require('mongoose-lean-virtuals');
  const schema = new mongooseClient.Schema({
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    name: { type: String },
    phone: { type: String },
    verified: { type: Boolean, default: false },
    country: { type: String },
    province: { type: String },
    job: { type: String },
    role: { type: String },
  }, {
    timestamps: true,
    collection: "users"
  });

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
