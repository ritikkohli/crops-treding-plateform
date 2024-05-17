import { NextRequest } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users.js";
import { getDataFromToken } from "./getDataFromToken";

export const getUsertype = async (request) =>{
    try {
        await connectMongoDB();
        const userId = await getDataFromToken(request);
        const data = await User.findById(userId);
        const {isFarmer} = data
        return isFarmer;
    } catch (error) {
        throw new Error(error.message);
    }
}