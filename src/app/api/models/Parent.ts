import mongoose, { Document, Schema } from 'mongoose';

export interface IParent extends Document {
  user: mongoose.Types.ObjectId;
  gradeLevel: string; 
  grade: string;
  levelOfStudy: string;
  subjectChildNeeds: string[]; 
  additionalInformation: string;
  availability: string;
  childInformation: {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    institution: string;
    streetName: string;
    zipCode: string;
  };
  parentPersonalInformation: {
    country: string;
    city: string;
    streetName: string;
    zipCode: string;
  };
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const ParentSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gradeLevel: { type: String, required: true },
  grade: { type: String, required: true },
  levelOfStudy: { type: String, required: true },
  subjectChildNeeds: { type: [String], required: true },
  additionalInformation: { type: String },
  availability: { type: String, required: true },
  childInformation: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    institution: { type: String, required: true },
    streetName: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  parentPersonalInformation: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    streetName: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

const ParentModel = mongoose.models.Parent || mongoose.model<IParent>('Parent', ParentSchema);
export default ParentModel;
