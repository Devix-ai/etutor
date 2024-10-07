import { hash } from 'bcryptjs';
import { connectMongoDB } from '../../connection/connection';
import UserModel from '../../models/User';
import TeacherModel from '../../models/Teacher';
import ParentModel from '../../models/Parent';
import StudentModel from '../../models/Student';
import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '../../utils/sendEmail';
import jwt from 'jsonwebtoken';
export async function POST(req: Request) {
  try {
    const { email, password, role, teacher, parent, student } = await req.json();
    
    // Log incoming request data
    console.log('Request data:', { email, password, role, teacher, parent, student });

    // Validate mandatory fields
    if (!email || !password || !role ||
      (role === 'teacher' && !teacher) ||
      (role === 'parent' && !parent) ||
      (role === 'student' && !student)) {
      console.error('Validation failed: Missing fields');
      return NextResponse.json({ message: 'Missing fields' }, { status: 422 });
    }

    const validRoles = ['parent', 'student', 'teacher'];
    if (!validRoles.includes(role)) {
      console.error('Validation failed: Invalid role');
      return NextResponse.json({ message: 'Invalid role' }, { status: 422 });
    }

    await connectMongoDB();

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      console.error('User already exists:', email);
      return NextResponse.json({ message: 'User already exists' }, { status: 422 });
    }

    // Hash the password
    const hashedPassword = await hash(password, 12);

    // Create new user
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();

    // Role-specific logic
    switch (role) {
      case 'teacher':
        if (!teacher || !teacher.subject || !teacher.yearsOfExperience) {
          console.error('Teacher data is incomplete:', teacher);
          return NextResponse.json({ message: 'Teacher data is incomplete' }, { status: 422 });
        }
        const newTeacher = new TeacherModel({
          user: savedUser._id,
          subject: teacher.subject,
          yearsOfExperience: teacher.yearsOfExperience,
        });
        await newTeacher.save();
        break;

      case 'parent':
        if (!parent || !parent.phoneNumber || !parent.address) {
          console.error('Parent data is incomplete:', parent);
          return NextResponse.json({ message: 'Parent data is incomplete' }, { status: 422 });
        }
        const newParent = new ParentModel({
          user: savedUser._id,
          phoneNumber: parent.phoneNumber,
          address: parent.address,
        });
        await newParent.save();
        break;

      case 'student':
        if (!student || !student.grade || !student.parentId) {
          console.error('Student data is incomplete:', student);
          return NextResponse.json({ message: 'Student data is incomplete' }, { status: 422 });
        }
        const newStudent = new StudentModel({
          user: savedUser._id,
          grade: student.grade,
          parentId: student.parentId,
        });
        await newStudent.save();
        break;

      default:
        console.error('Invalid role provided:', role);
        return NextResponse.json({ message: 'Invalid role' }, { status: 422 });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT secret is not defined');
      return NextResponse.json({ message: 'JWT secret is not defined' }, { status: 500 });
    }

    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      secret,
      { expiresIn: '1h' }
    );

    await sendVerificationEmail(savedUser.email, token).catch(error => {
      console.error('Error sending verification email:', error);
    });

    return NextResponse.json({ message: 'User created. Please check your email to verify your account.' }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error processing signup:', error.message, error.stack);
      return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    } else {
      console.error('An unknown error occurred');
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
