const express = require("express");
const connectDB = require("./config/db");

const dotenv = require("dotenv");
dotenv.config()
const app = express();


const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};
startServer();