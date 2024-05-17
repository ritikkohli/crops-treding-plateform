import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Crop from "@/models/crops";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req){
    try {
        await connectMongoDB();
        const userId = await getDataFromToken(req);
        const data = await Crop.find({"bids.buyer":userId,isBidAccepted}).populate('farmer');
        return NextResponse.json({data:data,userId});
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}