const express = require('express')
const router = express.Router()
const servicesController = require('./services.controller')


// get

router.route('/').get(servicesController.getServices)

// post

router.route('/').post(servicesController.addServices)

// delete

router.route('/:id').delete(servicesController.deleteServices)

module.exports = router