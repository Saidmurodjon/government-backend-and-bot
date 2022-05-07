const express = require('express')
const router = express.Router()
const reportController = require('./report.controller')


// get

router.route('/').get(reportController.getReport)

// post

router.route('/').post(reportController.addReport)

// put

router.route('/:id').put(reportController.updateReport)

// delete

router.route('/:id').delete(reportController.deleteReport)

module.exports = router