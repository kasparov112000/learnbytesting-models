export enum ProjectPermissions {
    canAddDocument = 'Can Add Document',
    canAssignAuthor = 'Can Assign Author',
    canComplete = 'Can Complete',
    canDemote = 'Can Demote',
    canExpand = 'Can Expand',
    canMarkInProgress = 'Can Mark In Progress',
    canMarkNotStarted = 'Can Mark Not Started',
    canMarkPending = 'Can Mark Pending',
    canModify = 'Can Modify',
    canPromote = 'Can Promote',
    canUpdateRfc = "Can Update RFC#",
    canUpload = 'Can Upload',
}


export namespace ProjectPermissions {
    export function all(...excludes: Array<ProjectPermissions>): Array<ProjectPermissions> {
        const permissions = [];
        for (let key in ProjectPermissions) {
            if (typeof ProjectPermissions[key] !== 'function' && !excludes.includes(ProjectPermissions[key] as ProjectPermissions)) {
                permissions.push(ProjectPermissions[key]);
            }
        }
        return permissions;
    }
}
