const express = require('express');
const codeController = require('./../controllers/codeController');
const router = express.Router();

router
.route('/:id')
.get(codeController.getCode)

module.exports = router;