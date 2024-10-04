import { NextResponse } from "next/server";
import mongoose from "mongoose";

// MongoDB connection function
const connectMongoDB = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is not defined");
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

// GET handler using Next.js 13 syntax
export async function GET(request: Request) {
  try {
    await connectMongoDB(); // Attempt to connect to MongoDB
    return NextResponse.json({ message: "Connected to MongoDB successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Connection failed", error: (error as Error).message },
      { status: 500 }
    );
  }
}
