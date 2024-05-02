import { NextResponse, NextRequest } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


export async function POST(req){
    try {
        const {email, password} = await req.json();
        
        await connectMongoDB();

        const user = await User.findOne({email});
        // console.log(user);

        if(!user){
            return NextResponse.json({message: "User not exist"},{status:400})
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error : "Invalid password"},{status:400});
        }

        const tokenData = {
            id : user._id,
            name : user.name,
            email : user.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET ,{expiresIn: "1d"});
        const response = NextResponse.json({
            message : "Login successfull",
            success : true
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;

    } catch (error) {
        return NextResponse.json({message: "An error occurred while loging in the user."},{status:500});
    }
}