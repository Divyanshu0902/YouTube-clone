import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
    }catch(err){
        console.error("MongoDB connection FAILED!!: ",err)
        throw err
    }
}

export default connectDB