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
