INSERT INTO LeaveApplications 
    (EmployeeId, 
    LeaveTypeId, 
    FromDate, 
    ToDate, 
    DaysCount, 
    LeaveReasonId, 
    ReasonDetail, 
    ApproverId, 
    ApproverDetail,
    LeaveStatusId, 
    LeaveStatusHODId, 
    LeaveStatusPRNId,
    LeaveStatusHRId, 
    LeaveStatusVCId, 
    LeaveValidityId, 
    LeaveValidityRemarks, 
    AttachmentFilePath, 
    IsActive,
    CreateDateTime) 
VALUES 
    (@EmployeeId, 
    @LeaveTypeId, 
    @FromDate, 
    @ToDate, 
    DATEDIFF(day, @FromDate, @ToDate) + 1,
    @LeaveReasonId, 
    @ReasonDetail, 
    12151, 
    NULL, 
    1, 
    1, 
    1, 
    1, 
    1, 
    1, 
    '--',
    @Attachment, 
    1,
    GETDATE())