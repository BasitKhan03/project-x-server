WITH EmployeeAttendance AS (
    SELECT
        [employee_EmployeeId],
        [date],
        [final_remarks]
    FROM
        ConsolidatedAttendances
    WHERE
        [employee_EmployeeId] = @EmployeeId
        AND [date] BETWEEN DATEADD(DAY, 1, EOMONTH(GETDATE(), -1)) AND EOMONTH(GETDATE())
)
SELECT
    FORMAT(
        (SUM(CASE
            WHEN (LOWER([final_remarks]) = 'AB') AND [final_remarks] <> 'OFF' THEN 1
            ELSE 0
        END) * 100.0) / NULLIF(SUM(CASE
            WHEN [final_remarks] <> 'OFF' THEN 1
            ELSE 0
        END), 0), 'N2'
    ) AS AbsentPercentage
FROM
    EmployeeAttendance