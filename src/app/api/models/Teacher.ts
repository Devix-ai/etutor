import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
});

const TeacherModel = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

export default TeacherModel;
