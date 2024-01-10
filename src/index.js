import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config(
    {
        path: '.env'
    }
);

connectDB().then(() => {
    // app.on("error",(error)=>{
    //     console.log("DB connection failed!",error);
    // })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("DB connection failed!",error);
})






























// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(`{${process.env.MONGO_URI}`, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         });
//         app.on("error", console.error.bind(console, "MongoDB connection error:"));
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }