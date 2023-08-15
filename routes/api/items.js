const express = require('express');
const router = express.Router();
const itemsCrtl = require('../../controllers/api/items');

// Get /api/items
router.get('/', itemsCrtl.index);
// Get /api/items/:id
router.get('/:id', itemsCrtl.show);

module.exports = router;
