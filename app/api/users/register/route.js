import { NextResponse } from "next/server";
import User from "@/models/users";
import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req){
    try {
        const { name, email, mobile, password, state, district, isFarmer} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();

        const isUserExist = await User.findOne({email});

        console.log(isUserExist);

        if(isUserExist){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        await User.create({name,email,mobile,password : hashedPassword, state, district,isFarmer});
        

        return NextResponse.json({message: "User registered."},{status:201});

    } catch (error) {
        return NextResponse.json({message: "An error occurred while registering the user."},{status:500});
    }
}