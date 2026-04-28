export interface ProjectStats {
  performance: string;
  dataLatency: string;
  liveStatus: string;
}

export interface ProjectDetailSection {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  livePreview: string;
  gitHub: string;
  previewCredentials?: {
    email: string;
    password: string;
  };
  challenges: string;
  solution: string;
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string;
    other?: string[];
  };
  targetUsers: string[];
  stats: ProjectStats;
  detailSections?: ProjectDetailSection[];
  plannedFeatures?: ProjectDetailSection[];
}
