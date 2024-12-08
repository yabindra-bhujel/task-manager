import { useState, useEffect } from "react";
import { ProjectStatus } from "../type/projects/enum";
import { OverviewProps } from "../type/projects/props";
import { TopOverview } from "./TopOverview";
import { TaskOverview } from "./TaskOverview";
import { TeamMemberOverview } from "./TeamMemberOverview";
import { CommunicationBoard } from "./CommunicationBord";
export const Overview: React.FC<OverviewProps> = ({ project }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [status, setStatus] = useState<ProjectStatus | string>(
    project?.status || ProjectStatus.PENDING
  );

  useEffect(() => {
    if (project) {
      setStatus(project.status);
    }
  }, [project]);

  const handleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleStatusChange = (newStatus: ProjectStatus) => {
    setStatus(newStatus);
    if (project) {
      project.status = newStatus;
    }
  };

  return (
    <div className="space-y-4">
      <TopOverview
        project={project}
        isEditing={isEditing}
        status={status}
        handleEdit={handleEdit}
        handleStatusChange={handleStatusChange}
      />
      <TaskOverview />

      <TeamMemberOverview />

      <CommunicationBoard />

      {/*  */}


   
    </div>
  );
};
