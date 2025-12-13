export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export type WidgetType = 'INTRO' | 'PROJECTS' | 'SKILLS' | 'EXPERIENCE' | null;

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  widget?: WidgetType;
  timestamp: Date;
}