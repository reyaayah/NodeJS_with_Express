const express = require('express');
const { getUser, addUser } = require('../controlllers/UserCtrl');

//routes router obj
const router = express.Router()

//GET USER || METHOD = GET
router.get("/", getUser);

//POST USER || METHOD= POST
router.post("/add-user", addUser);

//export routes
module.exports = router;