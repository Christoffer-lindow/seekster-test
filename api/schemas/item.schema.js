import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    qty: Number,
    price_per_item: Number,
    discount: Number,
});

var Item = mongoose.model("Item", itemSchema);
export default Item;