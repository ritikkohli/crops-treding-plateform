import {NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Crop from "@/models/crops";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function POST(req){
    try {
        const {bid, crop} = await req.json();
        await connectMongoDB();


        const userId = await getDataFromToken(req);
        console.log('done',userId);

        await Crop.findByIdAndUpdate(crop,{$push: {bids:{buyer:userId,bid}}});

        return NextResponse.json({message: 'bid submitted'},{status: 201});
    } catch (error) {
        return NextResponse.json(error)
    }
}