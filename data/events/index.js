'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');


// Get all employees
const getEmployees = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/other');

        const employeeList = await pool.request()
            .query(sqlQueries.getEmployeeList);

        return employeeList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};


// Add an employee details
const addEmployee = async (employeeData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/other');

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


// Update an employee details using ID
const updateEmployee = async (EmployeeId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/other');

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


// Delete an employee using ID
const deleteEmployee = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/other');

        const deleteEmployee = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.deleteEmployee);

        return deleteEmployee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Login for employee using employee_code and EmployeeId
const loginEmployee = async (employee_code) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/login');

        const loginEmployee = await pool.request()
            .input('employee_code', sql.NVarChar, employee_code)
            .query(sqlQueries.loginEmployee);

        return loginEmployee.recordset;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};


// Get an employee profile details using ID
const getProfile = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/login');

        const employee = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getEmployeeByID);

        return employee.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee latest attendance details using ID
const getLatestAttendance = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const latestAttendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getLatestAttendance);

        return latestAttendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee latest attendance details using ID
const getAttendance = async (EmployeeId, selectedYear, selectedMonth) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const attendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('selectedYear', sql.Int, selectedYear)
            .input('selectedMonth', sql.Int, selectedMonth)
            .query(sqlQueries.getAttendance);

        return attendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee present attendance percentage
const getPresentPercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const presentAttendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getPresentPercentage);

        return presentAttendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee absent attendance percentage
const getAbsentPercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const absentAttendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getAbsentPercentage);

        return absentAttendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee late attendance percentage
const getLatePercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const lateAttendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getLatePercentage);

        return lateAttendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee early out attendance percentage
const getEarlyOutPercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const earlyoutAttendance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getEarlyOutPercentage);

        return earlyoutAttendance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee leaves percentage
const getLeavesPercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/attendance');

        const leaves = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getLeavesPercentage);

        return leaves.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee leave details using ID
const getLeavesSummary = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/leaves');

        const leaves = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getLeavesSummary);

        return leaves.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee access group using ID
const getAccessGroup = async (AccessGroupId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/details');

        const access = await pool.request()
            .input('AccessGroupId', sql.Int, AccessGroupId)
            .query(sqlQueries.getAccessGroup);

        return access.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee leave balance using ID and year
const getLeavesBalance = async (EmployeeId, YearId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/leaves');

        const balance = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('YearId', sql.Int, YearId)
            .query(sqlQueries.getLeavesBalance);

        return balance.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get an employee leaves list using ID and year
const getLeavesList = async (EmployeeId, Year) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/leaves');

        const list = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('Year', sql.Int, Year)
            .query(sqlQueries.getLeavesListByDate);

        return list.recordset;
    } catch (error) {
        return error.message;
    }
};


// Insert an employee leave request
const insertLeaveRequest = async (EmployeeId, LeaveTypeId, FromDate, ToDate, LeaveReasonId, ReasonDetail, Attachment) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/leaves');

        await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('LeaveTypeId', sql.Int, LeaveTypeId)
            .input('FromDate', sql.DateTime, FromDate)
            .input('ToDate', sql.DateTime, ToDate)
            .input('LeaveReasonId', sql.Int, LeaveReasonId)
            .input('ReasonDetail', sql.NVarChar, ReasonDetail)
            .input('Attachment', sql.NVarChar, Attachment)
            .query(sqlQueries.insertLeaveApplication);

        return 'Leave request successfully added';
    } catch (error) {
        return error.message;
    }
};


// Upload an employee profile picture using ID
const uploadProfilePicture = async (EmployeeId, Image) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/profile');

        await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .input('Image', sql.NVarChar, Image)
            .query(sqlQueries.uploadProfilePicture);

        return 'Profile picture successfully uploaded';
    } catch (error) {
        return error.message;
    }
};


// Get team members count using supervisor ID
const getTeamMembersCount = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/team');

        const count = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getTeamMembersCount);

        return count.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get team members attendance percentage using supervisor ID
const getAttendancePercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/team');

        const percentage = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getTeamMembersAttendancePercentage);

        return percentage.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get team members leaves percentage using supervisor ID
const getTeamLeavesPercentage = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/team');

        const percentage = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getTeamMembersLeavesPercentage);

        return percentage.recordset;
    } catch (error) {
        return error.message;
    }
};


// Get team members details using supervisor ID
const getTeamDetails = async (EmployeeId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events/team');

        const details = await pool.request()
            .input('EmployeeId', sql.Int, EmployeeId)
            .query(sqlQueries.getTeamMembersDetails);

        return details.recordset;
    } catch (error) {
        return error.message;
    }
};


module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    loginEmployee,
    getProfile,
    getLatestAttendance,
    getAttendance,
    getAbsentPercentage,
    getPresentPercentage,
    getLatePercentage,
    getEarlyOutPercentage,
    getLeavesPercentage,
    getLeavesSummary,
    getAccessGroup,
    getLeavesBalance,
    getLeavesList,
    insertLeaveRequest,
    uploadProfilePicture,
    getTeamMembersCount,
    getAttendancePercentage,
    getTeamLeavesPercentage,
    getTeamDetails
}