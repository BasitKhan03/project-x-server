'use strict';

const express = require('express');
const appController = require('../controllers/appController');
const verification = require('../middleware/verification');

const router = express.Router();

const {
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeProfile,
    getEmployeeLatestAttendance,
    getEmployeeAttendance,
    getEmployeePresentPercentage,
    getEmployeeAbsentPercentage,
    getEmployeeLatePercentage,
    getEmployeeEarlyOutPercentage,
    getEmployeeLeavesPercentage,
    getEmployeeLeavesSummary,
    getEmployeeAccessGroup,
} = appController;

const { verifyToken } = verification

router.get('/employee', getAllEmployees);
router.post('/employee', addEmployee);
router.put('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);

router.post('/employee/:id', verifyToken, getEmployeeProfile);
router.post('/employee/attendance/:id', verifyToken, getEmployeeAttendance);
router.post('/employee/latestattendance/:id', verifyToken, getEmployeeLatestAttendance);
router.post('/employee/presentpercentage/:id', verifyToken, getEmployeePresentPercentage);
router.post('/employee/absentpercentage/:id', verifyToken, getEmployeeAbsentPercentage);
router.post('/employee/latepercentage/:id', verifyToken, getEmployeeLatePercentage);
router.post('/employee/earlyoutpercentage/:id', verifyToken, getEmployeeEarlyOutPercentage);
router.post('/employee/leavespercentage/:id', verifyToken, getEmployeeLeavesPercentage);
router.post('/employee/leavessummary/:id', verifyToken, getEmployeeLeavesSummary);
router.post('/employee/access/:id', verifyToken, getEmployeeAccessGroup);

module.exports = {
    routes: router
}