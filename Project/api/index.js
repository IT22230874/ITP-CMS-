const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth.route.js");
dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
