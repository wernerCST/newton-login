const express = require('express');
const codeController = require('./../controllers/codeController');
const router = express.Router();

router
.route('/:id/:code')
.get(codeController.getCode)

module.exports = router;