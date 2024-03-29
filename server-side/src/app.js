import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  };


app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(allowCrossDomain);
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
