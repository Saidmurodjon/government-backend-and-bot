const express = require('express')
const router = express.Router()
const userController = require('./user.controller')

// get

router.route('/').get(userController.getUser)

// post

router.route('/').post(userController.addUser)



router.route('/auth').post(userController.chackUser)

// put

router.route('/:id').put(userController.updateUser)

// delete

router.route('/:id').delete(userController.deleteUser)

module.exports = router