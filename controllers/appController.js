'use strict';

const data = require('../data/events');

const getAllEmployees = async (req, res, next) => {
    try {
        const employeeList = await data.getEmployees();
        res.send(employeeList);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addEmployee = async (req, res, next) => {
    try {
        const data = req.body;
        const insertedEmployee = await data.addEmployee(data);
        res.send(insertedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateEmployee = async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        const data = req.body;
        const updatedEmployee = await data.updateEmployee(EmployeeId, data);
        res.send(updatedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        const deletedEmployee = await data.deleteEmployee(EmployeeId);
        res.send(deletedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeProfile = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employee = await data.getProfile(EmployeeId);
        res.send(employee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeLatestAttendance = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeLatestAttendance = await data.getLatestAttendance(EmployeeId);
        res.send(employeeLatestAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeAttendance = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const selectedYear = parseInt(req.body.selectedYear);
        const selectedMonth = parseInt(req.body.selectedMonth);
        const employeeAttendance = await data.getAttendance(EmployeeId, selectedYear, selectedMonth);
        res.send(employeeAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeePresentPercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeePresentAttendance = await data.getPresentPercentage(EmployeeId);
        res.send(employeePresentAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeAbsentPercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeAbsentAttendance = await data.getAbsentPercentage(EmployeeId);
        res.send(employeeAbsentAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeLatePercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeLateAttendance = await data.getLatePercentage(EmployeeId);
        res.send(employeeLateAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeEarlyOutPercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeEarlyOutAttendance = await data.getEarlyOutPercentage(EmployeeId);
        res.send(employeeEarlyOutAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeLeavesPercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeLeavesPercent = await data.getLeavesPercentage(EmployeeId);
        res.send(employeeLeavesPercent);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeLeavesSummary = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeLeaves = await data.getLeavesSummary(EmployeeId);
        res.send(employeeLeaves);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeAccessGroup = async (req, res, next) => {
    try {
        const AccessGroupId = parseInt(req.params.id);
        const employeeAccessGroup = await data.getAccessGroup(AccessGroupId);
        res.send(employeeAccessGroup);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
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
    getEmployeeAccessGroup
}