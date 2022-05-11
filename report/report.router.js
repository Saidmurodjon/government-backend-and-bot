const express = require('express')
const router = express.Router()
const reportController = require('./report.controller')


// get

router.route('/:id').get(reportController.getReport)

router.route('/').get(reportController.getReport1)

// userHistory
router.route('/user/:userName').get(reportController.getReport2)
// post

router.route('/').post(reportController.addReport)

// put

router.route('/:id').put(reportController.updateReport)

// delete

router.route('/:id').delete(reportController.deleteReport)

module.exports = router