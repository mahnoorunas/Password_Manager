import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/password_manager");

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);
  }
}