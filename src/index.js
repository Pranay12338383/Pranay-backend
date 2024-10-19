import dotenv from 'dotenv'

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

// another way while creating another file inside db in src and importing here
connectDB()




// one way to connect data base

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// Data base connection 
// ( async ()=>{
//     try{
//           await mongoose.connect(`${process.env.MONGODB_URI}/
//             ${DB_NAME}`)
//     } catch(error){
//         console.error("ERROR! ", error)
//         throw err
//     }
// })()
