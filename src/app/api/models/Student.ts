import { Schema, model, models } from 'mongoose';

const studentSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  grade: { type: Number, required: true },
  parentId: { type: Schema.Types.ObjectId, ref: 'Parent', required: true }
}, { timestamps: true });

const StudentModel = models.Student || model('Student', studentSchema);
export default StudentModel;
