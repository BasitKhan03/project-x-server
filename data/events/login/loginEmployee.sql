SELECT [EmployeeId]
      ,[employee_code]
      ,[password]
      ,[salt]
      ,[first_name]
      ,[last_name]
      ,[photograph]
      ,[address]
FROM [dbo].[Employees]
WHERE [employee_code]=@employee_code

