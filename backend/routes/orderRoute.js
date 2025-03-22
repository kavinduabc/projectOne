const express = require('express');
const { createOrder, getOrdersByEmail, getAllOrders, deleteOrder, updateOrder } = require('../controller/orderController')
const router = express.Router();

// create a new order
router.post("/",  createOrder);

// get order by email
router.get('/email/:email', getOrdersByEmail);




module.exports = router;