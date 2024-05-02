import mongoose, { Schema, models } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const cropSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    variety:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    farmer:{
        type: ObjectId,
        required: true,
        ref: "User"
    }
},{ timestamps:true })

const Crop = models.Crop || mongoose.model("Crop", cropSchema);

export default Crop;