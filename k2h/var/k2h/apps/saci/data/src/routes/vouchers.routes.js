const express = require('express');
const { checkVoucher } = require('../controllers/vouchers/check');
const router = express.Router();

router.post('/check', checkVoucher);

module.exports = router;