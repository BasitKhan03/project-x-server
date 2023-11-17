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

const getEmployeeLeavesBalance = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const YearId = parseInt(req.body.year);
        const employeeLeavesBalance = await data.getLeavesBalance(EmployeeId, YearId);
        res.send(employeeLeavesBalance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeLeavesList = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const Year = parseInt(req.body.year);
        const employeeLeavesList = await data.getLeavesList(EmployeeId, Year);
        res.send(employeeLeavesList);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const insertEmployeeLeaveRequest = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const LeaveTypeId = parseInt(req.body.leaveTypeId);
        const FromDate = new Date(req.body.fromDate);
        const ToDate = new Date(req.body.toDate);
        const LeaveReasonId = parseInt(req.body.leaveReasonId);
        const ReasonDetail = req.body.reasonDetail;
        const Attachment = req.body.attachment;
        const employeeLeaveRequest = await data.insertLeaveRequest(EmployeeId, LeaveTypeId, FromDate, ToDate, LeaveReasonId, ReasonDetail, Attachment);
        res.send(employeeLeaveRequest);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const uploadEmployeeProfilePicture = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const Image = req.body.image;
        const employeeProfilePicture = await data.uploadProfilePicture(EmployeeId, Image);
        res.send(employeeProfilePicture);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamCount = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const teamCount = await data.getTeamMembersCount(EmployeeId);
        res.send(teamCount);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamAttendancePercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const attendancePercentage = await data.getAttendancePercentage(EmployeeId);
        res.send(attendancePercentage);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamLeavesPercentage = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const leavesPercentage = await data.getTeamLeavesPercentage(EmployeeId);
        res.send(leavesPercentage);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamDetails = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const details = await data.getTeamDetails(EmployeeId);
        res.send(details);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamNames = async (req, res, next) => {
    try {
        const EmployeeId = parseInt(req.params.id);
        const names = await data.getTeamMembersNames(EmployeeId);
        res.send(names);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const insertEmployeeFutureManualAttendance = async (req, res, next) => {
    try {
        const FromDate = new Date(req.body.fromDate);
        const ToDate = new Date(req.body.toDate);
        const EmployeeCode = req.body.employeeCode;
        const Remarks = req.body.remarks;
        const employeeFutureManualAttendance = await data.insertFutureManualAttendance(FromDate, ToDate, EmployeeCode, Remarks);
        res.send(employeeFutureManualAttendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTeamFutureManualAttendance = async (req, res, next) => {
    try {
        const EmployeeCode = req.body.employeeCode;
        const attendance = await data.getTeamMembersFutureManualAttendance(EmployeeCode);
        res.send(attendance);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEmployeeFutureManualAttendance = async (req, res, next) => {
    try {
        const EmployeeCode = req.body.employeeCode;
        const attendance = await data.getEmployeeFutureManualAttendance(EmployeeCode);
        res.send(attendance);
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
    getEmployeeAccessGroup,
    getEmployeeLeavesBalance,
    getEmployeeLeavesList,
    insertEmployeeLeaveRequest,
    uploadEmployeeProfilePicture,
    getTeamCount,
    getTeamAttendancePercentage,
    getTeamLeavesPercentage,
    getTeamDetails,
    getTeamNames,
    insertEmployeeFutureManualAttendance,
    getTeamFutureManualAttendance,
    getEmployeeFutureManualAttendance
}