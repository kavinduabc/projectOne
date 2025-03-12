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
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders" });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);
        if(!deletedOrder){
            res.status(404).send({message:"Order Not Found"});
        }
        res.status(200).send({
            message:"Order deleted successfully",
            order: deletedOrder
        });
    } catch(error) {
        res.status(500).send({message:"Failed to delete the order"});
    }
}

const updateOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const { status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            id, 
            { status }, 
            {new: true});
        res.status(200).send({
            message:"Order updated successfully",
            order: updatedOrder
        });
    } catch(error) {
        res.status(500).send({message:"Failed to update the order"});
    }
}


module.exports = {
    createOrder,
    getOrdersByEmail,
    getAllOrders,
    deleteOrder
 };
