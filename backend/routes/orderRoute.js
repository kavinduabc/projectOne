const express = require('express');
const { createOrder, getOrdersByEmail, getAllOrders, deleteOrder, updateOrder } = require('../controller/orderController')
const router = express.Router();

// create a new order
router.post("/",  createOrder);

// get order by email
router.get('/email/:email', getOrdersByEmail);

// get all orders
router.get('/', getAllOrders);

// delete a order
router.delete("/delete/:id", deleteOrder);

//update a book
router.put("/update/:id", updateOrder);


module.exports = router;