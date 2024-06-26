import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    isFarmer:{
        type: Boolean,
        default: false
    }
},{ timestamps:true })

const User = models.User || mongoose.model("User", userSchema);

export default User; 