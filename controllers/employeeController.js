'use strict';

const data = require('../data/events');

const getAllEmployees = async (req, res, next) => {
    try {
        const employeeList = await data.getEmployees();
        res.send(employeeList);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmployeeProfile = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employee = await data.getProfile(EmployeeId);
        res.send(employee);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEmployee = async (req, res, next) => {
    try {
        const data = req.body;
        const insertedEmployee = await data.addEmployee(data);
        res.send(insertedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEmployee = async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        const data = req.body;
        const updatedEmployee = await data.updateEmployee(EmployeeId, data);
        res.send(updatedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEmployee = async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        const deletedEmployee = await data.deleteEmployee(EmployeeId);
        res.send(deletedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmployeeAttendance = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeAttendance = await data.getAttendance(EmployeeId);
        res.send(employeeAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmployeeLeaves = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const employeeLeaves = await data.getLeaves(EmployeeId);
        res.send(employeeLeaves);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeProfile,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeAttendance,
    getEmployeeLeaves
}