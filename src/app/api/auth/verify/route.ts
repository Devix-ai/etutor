import jwt, { JwtPayload } from 'jsonwebtoken';
import UserModel from '../../models/User';
import { connectMongoDB } from '../../connection/connection';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Invalid or missing token' }, { status: 400 });
  }

  try {

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return NextResponse.json({ message: 'JWT secret is not defined' }, { status: 500 });
    }
    const decoded = jwt.verify(token, secret) as JwtPayload & { userId?: string; email?: string };

    if (!decoded.userId || !decoded.email) {
      return NextResponse.json({ message: 'Invalid token payload' }, { status: 400 });
    }

    await connectMongoDB();

    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    user.verified = true;
    await user.save();

    return NextResponse.json({ message: 'Email verified successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Token expired or invalid' }, { status: 400 });
  }
}
