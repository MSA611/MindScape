import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Connect To Mongo");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectToMongo;
