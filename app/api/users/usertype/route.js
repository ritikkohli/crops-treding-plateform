import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req){
    try {
        await connectMongoDB();
        const userId = await getDataFromToken(req);
        const user = await User.findById(userId).select("isFarmer");
        return NextResponse.json({user});
    } catch (error) {
        console.log(error)
    }
}