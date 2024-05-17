import mongoose, { Schema, models } from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const acceptedbidSchema = new Schema({
    ammount : {
        type: Number,
        required: true
    },
    crop : {
        type : ObjectId,
        required : true,
        ref: "Crop"
    },
    buyer : {
        type : ObjectId,
        required : true,
        ref: "User"
    },
    farmer : {
        type : ObjectId,
        required : true,
        ref: "User"
    }
},{timestamps : true});

const Acceptedbid = models.Acceptedbid || mongoose.model("Acceptedbid", acceptedbidSchema);

export default Acceptedbid;