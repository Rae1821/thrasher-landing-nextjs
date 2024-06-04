import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
  // mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connnect");
    return;
  }
  try {
    // await mongoose.connect(process.env.MONGODB_URI, {
    //   dbName: "Thrasher Landing",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
