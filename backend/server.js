import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dataBase.js";
import Product from './model/product/product.model.js'
dotenv.config();

const port = process.env.PORT;

const app = express();
app.post('/products',async(req,res)=>{
  const product = req.body
  const newProduct = new Product(product)
  try {
    await newProduct.save()
    return res.status(201).json({success:'true','data':newProduct})
  } catch (error) {
    console.log(error)
  }
app.listen(port, () => {
  connectDB();
  console.log(`server is listening at ${port}`);
});
