SELECT TOP 1
    [ConsolidatedAttendanceId],
    [date],
    [time_in],
    [time_out],
    [status_in],
    [status_out],
    [final_remarks],
    [active],
    [employee_EmployeeId],
    [terminal_in],
    [terminal_out],
    [overtime],
    [overtime_status],
    [latetime],
    [is_payroll_synced],
    [campusname],
    [description]
FROM
    ConsolidatedAttendances
WHERE
    [employee_EmployeeId] = @EmployeeId
    AND [date] >= DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) 
ORDER BY
    [date] DESC;