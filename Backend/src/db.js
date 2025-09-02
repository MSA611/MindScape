import mongoose from "mongoose";

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
