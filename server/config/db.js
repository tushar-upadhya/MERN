import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("success");
  } catch (error) {
    console.log("error:", `${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
