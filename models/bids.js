import mongoose, {Schema, Types, models} from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const bidSchema = new Schema({
    buyer: {
        type: ObjectId,
        required: true
    },
    bid: {
        type: Number,
        required: true
    },
    crop: {
        type: ObjectId,
        require: true
    }

},{ timestamps : true})

const Bid = models.Bid || mongoose.model("Bid", bidSchema);

export default Bid;