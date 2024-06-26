import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Crop from "@/models/crops";

export async function GET(req){
    try {
        await connectMongoDB();

        const crops = await Crop.find({isBidAccepted: false});
        console.log(crops);
        return NextResponse.json({data:crops});
    } catch (error) {
        return NextResponse.json(error);
    }
}