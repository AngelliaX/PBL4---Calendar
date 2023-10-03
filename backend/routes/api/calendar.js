const express = require('express');
const router = express.Router();
const calendarController = require('../../controllers/calendarController');

router.route('/')
    .get(calendarController.printSelectedYear);

module.exports = router;