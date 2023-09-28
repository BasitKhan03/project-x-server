'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');


// Get all employees
const getEmployees = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const employeeList = await pool.request()
            .query(sqlQueries.getEmployeeList);

        return employeeList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};


// Get an employee details using ID
const getProfile = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const employee = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getEmployeeByID);

        return employee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Add an employee details
const addEmployee = async (employeeData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const addEmployee = await pool.request()
            .input('first_name', sql.NVarChar(100), employeeData.first_name)
            .input('last_name', sql.NVarChar(100), employeeData.last_name)
            .input('email', sql.NVarChar(100), employeeData.email)
            .input('mobile_no', sql.NVarChar(100), employeeData.mobile_no)
            .input('active', sql.Bit, employeeData.active)
            .query(sqlQueries.createEmployee);

        return addEmployee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Update an employee details
const updateEmployee = async (EmployeeId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const updateEmployee = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('first_name', sql.NVarChar(100), data.first_name)
            .input('last_name', sql.NVarChar(100), data.last_name)
            .input('email', sql.NVarChar(100), data.email)
            .input('mobile_no', sql.NVarChar(100), data.mobile_no)
            .input('active', sql.Bit, data.active)
            .query(sqlQueries.updateEmployee);

        return updateEmployee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Delete an employee 
const deleteEmployee = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const deleteEmployee = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.deleteEmployee);

        return deleteEmployee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Login for employee using employee_code and password
// const loginEmployee = async (employee_code) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('events');

//         const loginEmployee = await pool.request()
//             .input('employee_code', sql.NVarChar, employee_code)
//             .query(sqlQueries.loginEmployee);

//         return loginEmployee.recordset;
//     } catch (error) {
//         console.error(error.message);
//         throw error;
//     }
// }


// Login for employee using employee_code and EmployeeId
const loginEmployee = async (employee_code) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const loginEmployee = await pool.request()
            .input('employee_code', sql.NVarChar, employee_code)
            .query(sqlQueries.loginEmployee);

        return loginEmployee.recordset;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}


// Get attendance details using ID
const getAttendance = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const attendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getAttendance);

        return attendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get leave details using ID
const getLeaves = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');

        const leaves = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getLeaves);

        return leaves.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getEmployees,
    getProfile,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    loginEmployee,
    getAttendance,
    getLeaves
}