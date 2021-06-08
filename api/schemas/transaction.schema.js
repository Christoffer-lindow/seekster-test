import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    items: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Item'
    }],
    total_price: Number,
    change: Number
});

var Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;