const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// Get /api/orders/cart
router.get('/cart', ordersCtrl.cart);

// Get /api/orders/history
router.get('/history', ordersCtrl.history);

// Post /api/orders/cart/checkout
router.post('/cart/items/:id', ordersCtrl.addToCart);

// Post /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

// Put /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;
