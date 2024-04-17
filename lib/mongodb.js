import mongoose from "mongoose";

export const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("Error while connectimg to mongodb !",error);
    }
}