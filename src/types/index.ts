export type ServiceKeytype =
  | 'hard-label'
  | 'impossible-label'
  | 'medium-label'
  | 'easy-label';

export type ServicePriority = '1' | '2' | '3';

export interface Service {
  name: string;
  website: string;
  deleteurl: '#' | string;
  info: string;
  difficulty: string;
  keytype: ServiceKeytype;
  priority: ServicePriority;
  category: string;
}
