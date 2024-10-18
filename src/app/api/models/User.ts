import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  verified: boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  verified: { type: Boolean, default: false },  
}, {
  timestamps: true,
});

const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default UserModel;
