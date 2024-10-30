const express = require('express');
const { getStudents, getStudentsByID } = require('../controlllers/studentController');

//routes router obj
const router = express.Router()

//GET all student list || METHOD = GET
router.get("/getall", getStudents);

//Get student by ID
router.get("/get/:id", getStudentsByID);
module.exports = router;