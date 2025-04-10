const mongoose = require('mongoose');
const { Schema } = mongoose;

// Cart Schema
const cartSchema = new Schema({
    ItemId: String,
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    item: String,
    image: String, 
    price: Number,
    quantity: Number,
    email: {
        type: String,
        trim: true,
        required: true,
    }
});

// Create Cart model
const Carts = mongoose.model("Cart", cartSchema);

module.exports = Carts;