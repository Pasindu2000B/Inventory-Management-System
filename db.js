const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://pasindupremasirilk:12345@cluster0.9gd8jp4.mongodb.net/?appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
