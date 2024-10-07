import { Schema, model, models } from 'mongoose';

const parentSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

const ParentModel = models.Parent || model('Parent', parentSchema);
export default ParentModel;
