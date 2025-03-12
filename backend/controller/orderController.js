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



module.exports = {
    createOrder
 };
