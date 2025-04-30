const express = require('express');
const { getOrders } = require('../controllers/orders/orders');
const { postOrders } = require('../controllers/orders/orders');
const router = express.Router();

router.get('/orders', getOrders);
router.get('/orders', postOrders);

module.exports = router;