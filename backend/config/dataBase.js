import mongoose from "mongoose";
export const connectDB = async() =>{
  try {
   const con = await mongoose.connect(process.env.MONGO_URL)
   console.log('db connected')
  } catch (error) {
    console.log('database error',error)
    process.exit(1)
  }
}