import mongoose, { Document, Schema } from 'mongoose';

export interface ITeacher extends Document {
  user: mongoose.Types.ObjectId;  // Reference to User model
  contactInformation: {
    country: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    email: string;
  };
  education: {
    college: string;
    degree: string;
    major: string;
    graduation: Date;
    school?: string;
  };
  experience: {
    hasExperience: boolean;
    tutoringLevel: string[];
    subjectsTutored: string[];
    languages: string[];
    instructionTypes: string[];
    availableHours: number;
    startDate: Date;
    generalAvailability: {
      day: string;
      time: string;
    }[];
    hasTeachingExperience: boolean;
    is18OrAbove: boolean;
  };
  isApproved: boolean;
}
const TeacherSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Relates to User model
  contactInformation: {
    country: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    zipCode: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  education: {
    college: { type: String, required: true },
    degree: { type: String, required: true },
    major: { type: String, required: true },
    graduation: { type: Date, required: true },
    school: { type: String },
  },
  experience: {
    hasExperience: { type: Boolean, required: true },
    tutoringLevel: { type: [String], required: true },
    subjectsTutored: { type: [String], required: true },
    languages: { type: [String], required: true },
    instructionTypes: { type: [String], required: true },
    availableHours: { type: Number, required: true },
    startDate: { type: Date, required: true },
    generalAvailability: {
      type: Map,
      of: [String],
      required: true
    },
    hasTeachingExperience: { type: Boolean, required: true },
    is18OrAbove: { type: Boolean, required: true }
  },
  isApproved: { type: Boolean, default: false },
}, {
  timestamps: true,
});
const TeacherModel = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', TeacherSchema);
export default TeacherModel;
