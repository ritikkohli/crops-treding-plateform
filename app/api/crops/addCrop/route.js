import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Crop from "@/models/crops";

export async function POST(req){
    try {
        const {name, variety, status, quantity, msp} = await req.json();
        connectMongoDB();

        const userId = await getDataFromToken(req);
        console.log(userId);
        await Crop.create({name, variety, status, quantity, msp, farmer: userId});

        return NextResponse.json({message: 'crop created'},{status: 201},{data:userId});

    } catch (error) {
        return NextResponse.json(error);
    }
}