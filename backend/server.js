import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dataBase.js";
import {Product} from './model/product.model.js'

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post('/api/products', async (req, res) => {
  const product = req.body;
  if(!product.name || !product.price ||!product.image){
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete('/api/products/:id',async(req,res)=>{
  const {id} = req.params
  console.log('id',id)
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({'message':'product delete'})
  } catch (error) {
    res.status(400).json({'message': error.message})
  }
})

// Connect to DB and start the server
connectDB();
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
