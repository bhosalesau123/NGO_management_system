import mongoose from "mongoose"

const connectDb = async ()=>{

    try{
        const connDb = await mongoose.connect(process.env.mongoDb)
         console.log  ("Connect db".bgMagenta.green);
    }

    catch(error)
    {
        console.log("mongodb connection fail".bgRed.blue)
    }
}


export default connectDb