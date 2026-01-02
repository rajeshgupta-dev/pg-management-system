const express = require("express");
const connectDB = require("./config/db");

const dotenv = require("dotenv");
const router = require("./MCR/routes/admin_route");
dotenv.config()
const app = express();
app.use(express.json());

app.use("/api/v1", router)


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