"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_step_1 = require("./project-step");
var ProjectSteps = /** @class */ (function () {
    function ProjectSteps() {
        this.details = new project_step_1.ProjectStep('details', 'ProjectDetails');
        this.documents = new project_step_1.ProjectStep('documents', 'Specify Project Documents');
        this.authors = new project_step_1.ProjectStep('authors', 'OFRO Assignment');
        this.authorCreateDrafts = new project_step_1.ProjectStep('authorCreateDrafts', 'Author Create Drafts');
        this.createReviewApproval = new project_step_1.ProjectStep('createReviewApproval', 'Owner Review Approval');
        this.uploadToStage = new project_step_1.ProjectStep('uploadToStage', 'Publish to Stage');
        this.OwnerReviewandApproval = new project_step_1.ProjectStep('OwnerReviewandApproval', 'Owner Review and Approval');
        this.uploadToCreate = new project_step_1.ProjectStep('uploadToCreate', 'Publish to Create');
        this.ownerAttestationCreate = new project_step_1.ProjectStep('ownerAttestationCreate', 'Owner Attestation of Create Documents');
        this.authorLibraryDrafts = new project_step_1.ProjectStep('authorLibraryDrafts', 'Author Library Drafts');
        this.libraryReviewApproval = new project_step_1.ProjectStep('libraryReviewApproval', 'Owner Review and Approval');
    }
    return ProjectSteps;
}());
exports.ProjectSteps = ProjectSteps;
//# sourceMappingURL=project-steps.js.map