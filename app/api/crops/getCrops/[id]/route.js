import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Crop from "@/models/crops";

export async function GET(req, {params}){
    try {
        const {id} = params;
        await connectMongoDB();

        const crops = await Crop.findById(id).populate('bids.buyer');
        console.log(crops);
        return NextResponse.json({data:crops});
    } catch (error) {
        return NextResponse.json(error);
    }
}