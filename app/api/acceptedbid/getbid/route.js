import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Acceptedbid from "@/models/acceptedbid";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(req){
    try {
        await connectMongoDB();
        
        const userId = await getDataFromToken(req);

        const data = await Acceptedbid.find({buyer:userId}).populate('farmer').populate('crop');

        return NextResponse.json({data:data})
    } catch (error) {
        return NextResponse.json({error:error.message});
    }
}