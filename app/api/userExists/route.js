import mongoose from "mongoose";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log("User: ",user);
        return NextResponse.json({user});
    } catch (error) {
        console.log(error)
    }
}