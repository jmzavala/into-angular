export interface Work {
  id?: number;
  name: string;
  description: string;
  date: Date;
  tags:string[];
  git?: string;
  url?: string;
}
