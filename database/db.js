import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const MONGODB_URI = `mongodb+srv://${userName}:${password}@cluster0.4dgk2qb.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = () => {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log(`Mongo DB connected succesfully`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log(`Mongo DB disconnected`);
  });

  mongoose.connection.on("error", (error) => {
    console.log(`Mongo DB Connection Error`, error.message);
  });
};

export default connectDB;
