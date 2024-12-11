import { ProjectInterface } from "./interfaces";
import { MenuItems, ProjectStatus } from "./enum";
import { NewTask } from "./interfaces";


export interface OverviewProps {
  project: ProjectInterface | null;
}

export interface ProjectHeaderProps {
  handleMenuItemChange: (item: MenuItems) => void;
  activeMenu: MenuItems;
  breadcrumbs: { label: string; to: string }[];
  project: ProjectInterface | null;
}

export interface ProjectStatusDropdownProps {
  status: ProjectStatus;
  handleStatusChange: (status: ProjectStatus) => void;
}

export interface TaskCreateProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: { [key: string]: string } | null;
  newTask: NewTask;
}