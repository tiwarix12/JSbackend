import mongoose from "mongoose";
import { DB_NAME } from "../cosntants.js";

const connectDB= async () => {
    try {
        // const connectionInstance = await mongoose.connect
        // (`{${process.env.MONGO_URI}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(
            process.env.MONGO_URI,
        )
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongo Error",error,'0', process.env.MONGO_URI, 'dbname', DB_NAME);
        process.exit(1);
    }
}
export default connectDB