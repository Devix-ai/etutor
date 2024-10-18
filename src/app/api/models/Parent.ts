import mongoose, { Document, Schema } from 'mongoose';

export interface IParent extends Document {
  user: mongoose.Types.ObjectId; 
  levelOfStudy: string;
  grade: string;
  subjects: string[]; 
  additionalInformation: string;
  availability: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const ParentSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  levelOfStudy: { type: String, required: true },
  grade: { type: String, required: true },
  subjects: { type: [String], required: true },
  additionalInformation: { type: String },
  availability: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

const ParentModel = mongoose.models.Parent || mongoose.model<IParent>('Parent', ParentSchema);
export default ParentModel;
