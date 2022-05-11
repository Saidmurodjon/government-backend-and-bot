const express = require('express')
const router = express.Router()
const cilientController = require('./cilient.controller')


// get

router.route('/').get(cilientController.getCilient)

// post

router.route('/').post(cilientController.addCilient)

// put

router.route('/:id').put(cilientController.updateCilient)

//
router.route('baza/:id').post(cilientController.addBaza)

// delete

router.route('/:id').delete(cilientController.deleteCilient)

module.exports = router