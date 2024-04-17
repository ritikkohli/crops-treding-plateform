import { NextResponse } from "next/server";
import User from "@/models/users";
import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req){
    try {
        const { name, email, mobile, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        User.create({name,email,mobile,password : hashedPassword});

        // console.log(name)
        // console.log(email)
        // console.log(mobile)
        // console.log(password)


        return NextResponse.json({message: "User registered."},{status:201});

    } catch (error) {
        return NextResponse.json({message: "An error occurred while registering the user."},{status:500});
    }
}