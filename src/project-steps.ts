import { ProjectStep } from './project-step';
export class ProjectSteps {
    public details: ProjectStep = new ProjectStep('details', 'ProjectDetails');
    public documents: ProjectStep = new ProjectStep('documents', 'Specify Project Documents');
    public authors: ProjectStep = new ProjectStep('authors', 'OFRO Assignment');
    public authorCreateDrafts: ProjectStep = new ProjectStep('authorCreateDrafts', 'Author Create Drafts');
    public createReviewApproval: ProjectStep = new ProjectStep('createReviewApproval', 'Owner Review Approval');
    public uploadToStage: ProjectStep = new ProjectStep('uploadToStage', 'Publish to Stage');
    public uploadToCreate: ProjectStep = new ProjectStep('uploadToCreate', 'Publish to Create');
    public ownerAttestationCreate: ProjectStep = new ProjectStep('ownerAttestationCreate', 'Owner Attestation of Create Documents');
    public authorLibraryDrafts: ProjectStep = new ProjectStep('authorLibraryDrafts', 'Author Library Drafts');
    public libraryReviewApproval: ProjectStep = new ProjectStep('libraryReviewApproval', 'Owner Review and Approval');
}
