export interface Project {
  _id: string;
  projectName: string;
  description: string;
  startDate: string;
  status: string;
  teamMember: string;
  progressNote: string;
  endDate: string;
}

// New projects do not have a MongoDB ID yet
export type ProjectInput = Omit<Project, '_id'>;
