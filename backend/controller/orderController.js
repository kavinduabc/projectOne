const Order = require('../models/order.js');

const createOrder = async (req, res) => {
    try{
        const newOrder = await Order({...req.body});
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch(error) {
        res.status(500).json({message:"Failed to create order"});
    }
};

const getOrdersByEmail = async (req, res) => {
    try{
        const {email} = req.params;
        const orders = await Order.find({ email }).sort({createdAt: -1});
        if(!orders) {
            return res.status(404).json({message: 'Orders not found'});
        }
        res.status(200).json(orders);
    } catch(error) {
        res.status(500).json({message:"Failed to fetch orders"});
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders" });
    }
};

module.exports = {
    createOrder,
    getOrdersByEmail
 };
