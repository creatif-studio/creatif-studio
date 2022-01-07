// databases-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'mysql';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const mongooseVirtuals = require('mongoose-lean-virtuals');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, required: true },
    repository: {type: String},
    tag_status: {type: String},
    v2: {type: Boolean}
  }, {
    timestamps: true,
    collection: 'mysql'
  });

  schema.virtual('id').get(function(this: any) {
    return this._id;
  });

  schema.set('toObject', { virtuals: true });
  schema.set('toJSON', { virtuals: true });
  schema.plugin(mongooseVirtuals);

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
