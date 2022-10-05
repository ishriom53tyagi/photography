const express = require('express')
const router = express.Router()

const index = require("../photoshoot/index");

router.get("/" , index.getRender)


module.exports = router
