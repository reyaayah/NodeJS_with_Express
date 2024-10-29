const express = require('express');
const { getStudents } = require('../controlllers/studentController');

//routes router obj
const router = express.Router()

//GET all student list || METHOD = GET
router.get("/getall", getStudents);

module.exports = router;