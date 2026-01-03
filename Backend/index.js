const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors")
const cookieParser = require("cookie-parser");



const dotenv = require("dotenv");
dotenv.config()
const router = require("./MCR/routes/admin_route");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}),
)
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