import mongoose, {Schema, Types, models} from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const bidSchema = new Schema({
    buyer: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    bid: {
        type: Number,
        required: true
    },
    crop: {
        type: ObjectId,
        require: true,
        ref: 'Crop'
    }

},{ timestamps : true})

const Bid = models.Bid || mongoose.model("Bid", bidSchema);

export default Bid;