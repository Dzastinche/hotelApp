import mongoose from "mongoose";
let isConnected = false;
const connectToServer = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected === false) {
    await mongoose.connect(process.env.MONGO_DB);
    isConnected = true;
    console.log("server is connected");
  } else {
    console.log("server is allready connected");
  }
};
export default connectToServer;
