// objNc9W8d77OdH3q;

import mongoose from "mongoose";


export async function  connectDB ()
{    const uri = process.env.MONGO_URI;
     try {
        const connect = await mongoose.connect(uri)
        console.log('MongoDB Connected')
     } catch (error) {
        console.log('MongoDB connection')
     }
}
