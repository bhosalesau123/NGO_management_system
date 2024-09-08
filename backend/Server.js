import express from "express";
import cors from "cors";
import morgan from  "morgan";
import colors from  "colors";
import dotenv from  "dotenv";
import connectDb from "./Db/Db.js"
import userRoute from "./MVC/Route/userRoute1.js"
import adminRoute from "./MVC/Route/adminRoute.js"
import ngoRoute from "./MVC/Route/ngoRoute.js"


dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000;

//midlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//db

connectDb();

// API Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/admin', adminRoute);
app.use('/api/v1/ngo', ngoRoute);



app.get('/',(req,res)=>{
    res.send({
        message:"Hello Saurabh"
    })
})

app.listen(PORT,()=>{
    console.log(`listening to port number ${PORT}`.bgCyan.blue);
})
