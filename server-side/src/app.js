import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors({
<<<<<<< HEAD
<<<<<<< HEAD
    origin:process.env.CORS_ORIGIN,
=======
    origin:["https://you-tube-ouffmwlti-bondman8195s-projects.vercel.app",process.env.CORS_ORIGIN],
>>>>>>> 1a9499862e47df94164cb9ca2d95b2401e848a0a
=======
    origin:process.env.CORS_ORIGIN,
>>>>>>> 5737ccee00ffcee2b22ade1b69ba39fb14dd4c11
    methods : ["POST","GET","DELETE","PUT","PATCH"],
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())

//router import
import userRouter from './routes/user.route.js';
import vedioRouter from './routes/video.route.js'
import commentRouter from './routes/comment.route.js'

//router declaration
app.use("/api/v1/users",userRouter);
app.use("/api/v1/videos",vedioRouter);
app.use("/api/v1/comments",commentRouter);

export {app}
