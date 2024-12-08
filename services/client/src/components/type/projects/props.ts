import { ProjectInterface } from "./interfaces";
import { MenuItems, ProjectStatus } from "./enum";


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