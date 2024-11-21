import mongoose from "mongoose";

const connectToDb = async () => {
  const dbConnectionString =
    process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/books";
  await mongoose.connect(dbConnectionString);
  console.log("Connected to database");
};

export default connectToDb;
