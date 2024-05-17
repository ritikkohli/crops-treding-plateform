import Acceptedbid from "@/models/acceptedbid";
import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Crop from "@/models/crops";

export async function POST(req){
    try {
        const {ammount, crop, buyer} = await req.json();
        await connectMongoDB();

        const userId = await getDataFromToken(req);
        console.log(userId);
        await Acceptedbid.create({ammount, crop, buyer, farmer: userId});
        await Crop.findByIdAndUpdate(crop,{isBidAccepted: true});

        return NextResponse.json({message: 'bid accepted'},{status: 201});
    } catch (error) {
        return NextResponse.json(error)
    }
}