import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express();

app.use(cors({
    origin: "https://harmonious-choux-9be213.netlify.app",
    credentials: true
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
