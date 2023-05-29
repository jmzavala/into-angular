export interface Project {
  id?: number;
  name: string;
  description: string;
  date: Date;
  tags:string[];
  git?: string;
  url?: string;
}
