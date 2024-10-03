const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

// Health Check Route
router.get('/', (req, res) => {
  res.send('API is running');
});

// Blockchain Routes
router.get('/blockNumber', contractController.getBlockNumber);
router.get('/contract/totalSupply', contractController.getTotalSupply);

module.exports = router;