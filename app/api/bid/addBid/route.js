import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Bid from "@/models/bids";

export async function POST(req){
    try {
        const {bid, crop} = await req.json();
        await connectMongoDB();

        const userId = await getDataFromToken(req);
        console.log(userId);

        await Bid.create({buyer: userId, bid, crop});

        return NextResponse.json({message: 'bid submitted'},{status: 201});

    } catch (error) {
        return NextResponse.json(error)
    }
}