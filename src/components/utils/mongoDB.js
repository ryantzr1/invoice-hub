require("dotenv").config();

const mongoose = require("mongoose");

const mongoDB = async () =>
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

module.exports = mongoDB;