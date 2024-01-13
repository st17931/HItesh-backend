const mongoose = require("mongoose");
const DB_NAME = require("../../src/constant.js");
// import { DB_NAME } from ;

async function connectDB(server){
    try{
        //console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`mongodb+srv://SatyamAdmin:SatyamAdmin@cluster0.iqfkkj8.mongodb.net/${DB_NAME}`)
        console.log(connectionInstance);
        server.listen(8000,()=>{
            console.log("Server is started")
        })
    }catch(error){
        console.log("Its an mongDB connection error", error)
        const internalError = new Error(`Error in internal  ${error}`)
        throw internalError;
    }
}

module.exports = connectDB;