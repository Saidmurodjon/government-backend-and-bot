const express = require('express')
const router = express.Router()

const userRouter = require('./users/user.router')
const cilientsRouter = require('./cilients/cilient.router')
const reportRouter = require('./report/report.router')
const serviceRouter = require('./services/services.router')


router.use('/cilient' , cilientsRouter)
router.use('/report' , reportRouter)
router.use('/user' , userRouter)
router.use('/service' , serviceRouter)

module.exports = router