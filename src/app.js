import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({origin:process.env.CORS_ORIGINd}));
app.use(express.json({limit: '128kb'}));
app.use(express.urlencoded({extended: true, limit: '128kb'}));
app.use(express.static('public'))

app.use(cookieParser());


export {app}