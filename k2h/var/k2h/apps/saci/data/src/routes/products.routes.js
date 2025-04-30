const express = require('express');
const { getWebspace } = require('../controllers/products/webspace');
const { getDomain } = require('../controllers/products/domain');
const router = express.Router();

router.get('/webspace', getWebspace);
router.get('/domain', getDomain);

module.exports = router;