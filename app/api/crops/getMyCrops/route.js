import { NextRequest, NextResponse } from "next/server";
import Crop from "@/models/crops";
import { connectMongoDB } from "@/lib/mongodb";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req){
    try {
        await connectMongoDB();
        const id = await getDataFromToken(req);
        const crops = await Crop.find({farmer:id}).populate('bids.buyer');
        console.log(crops);
        return NextResponse.json({data:crops});
    } catch (error) {
        return NextResponse.json(error)
    }
}