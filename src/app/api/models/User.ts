// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface User {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  role: string;
  verified: boolean; //to check either the user is verified or not
}

const UserSchema = new Schema<User & Document>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  verified: { type: Boolean, default: false }, 
}, {
  timestamps: true,
});

const UserModel = mongoose.models.User || mongoose.model<User & Document>('User', UserSchema);
export default UserModel;
