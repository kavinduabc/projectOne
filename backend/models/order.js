const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    address: {
        city: {
            type:String,
            required: true,
        },
        country: String,
        state: String,
        zipcode: String,
    },
    phone: {
        type:Number,
        required: true,
    },
    productIds: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    totalPrice: {
        type:Number,
        required: true,
    },
    status: { 
        type: String, 
        enum: ['Approved', 'Rejected', 'Pending'], 
        default: 'Pending', 
    }
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;