import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected");
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default connectDB;
