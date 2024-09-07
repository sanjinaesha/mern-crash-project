import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dataBase.js";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.listen(port, () => {
  connectDB();
  console.log(`server is listening at ${port}`);
});
