import { TaskStatus } from "./enum";
export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  created_by: number;
  updated_by: number;
  team_id: number | null;
}

export interface Tasks {
  id: number;
  title: string;
  status: string;
  due_date: string;
  updated_at: string;
  description: string;
  priority: string;
}
export interface NewTask extends Omit<Tasks, 'id' | 'updated_at'> {
  status: TaskStatus;
}
