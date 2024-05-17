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
    stage:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    msp: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    farmer:{
        type: ObjectId,
        required: true,
        ref: "User"
    },
    isBidAccepted : {
        type: Boolean,
        required: true,
        default: false
    },
    bids: [
        {
            buyer: {
                type: ObjectId,
                required: true,
                ref: 'User'
            },
            bid: {
                type: Number,
                required: true
            },
            isAccepted: {
                type: Boolean,
                default: false
            }
        }
    ]
},{ timestamps:true })

const Crop = models.Crop || mongoose.model("Crop", cropSchema);

export default Crop;