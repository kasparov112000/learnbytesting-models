export declare enum ProjectPermissions {
    canAddDocument = "Can Add Document",
    canAssignAuthor = "Can Assign Author",
    canComplete = "Can Complete",
    canDemote = "Can Demote",
    canExpand = "Can Expand",
    canMarkInProgress = "Can Mark In Progress",
    canMarkNotStarted = "Can Mark Not Started",
    canMarkPending = "Can Mark Pending",
    canModify = "Can Modify",
    canPromote = "Can Promote",
    canUpdateRfc = "Can Update RFC#",
    canUpload = "Can Upload"
}
export declare namespace ProjectPermissions {
    function all(...excludes: Array<ProjectPermissions>): Array<ProjectPermissions>;
}
