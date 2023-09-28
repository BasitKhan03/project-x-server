'use strict';

const express = require('express');
const employeeController = require('../controllers/employeeController');
const verification = require('../middleware/verification');

const router = express.Router();

const { getAllEmployees, getEmployeeProfile, addEmployee, updateEmployee, deleteEmployee, getEmployeeAttendance, getEmployeeLeaves } = employeeController;
const { verifyToken } = verification

router.get('/employee', getAllEmployees);
router.post('/employee/:id', verifyToken, getEmployeeProfile);
router.post('/employee', addEmployee);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);
router.post('/employee/attendance/:id', verifyToken, getEmployeeAttendance);
router.post('/employee/leaves/:id', verifyToken, getEmployeeLeaves);

module.exports = {
    routes: router
}