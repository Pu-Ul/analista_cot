export type View = 'dashboard' | 'mvp' | 'tasks' | 'workflow';

export interface NavItem {
  id: View;
  label: string;
  icon: string;
}

export interface UpdateItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  details: string;
  time: string;
  tag?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  responsible: {
    name: string;
    role: string;
    avatar?: string;
    initials: string;
  };
  phase: string;
  progress?: number;
  status?: string;
}
