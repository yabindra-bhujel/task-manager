import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/navigation/layout";
import { Header } from "../../components/header/Header";
import { Overview } from "../../components/projects/Overview";
import { ProjectHeader } from "../../components/projects/ProjectHeader";
import instance from "../../config/axiosInstance";
import { MenuItems } from "../../components/type/projects/enum";
import { ProjectInterface } from "../../components/type/projects/interfaces";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [projectName, setProjectName] = useState<string | null>(null);
  const [project, setProject] = useState<ProjectInterface | null>(null);
  const [activeMenu, setActiveMenu] = useState<MenuItems>(MenuItems.Overview);

  const handleMenuItemChange = (item: MenuItems) => {
    setActiveMenu(item);
  };

  const getProject = async (id: string) => {
    try {
      const response = await instance.get(`projects/show/${id}`);
      setProject(response.data.project);
      setProjectName(response.data.project.name);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (id) {
      getProject(id);
    }
  }, [id]);

  const breadcrumbs = [
    { label: "Projects", to: "/projects" },
    { label: projectName || "Loading...", to: `/projects/${id}` },
    { label: activeMenu, to: "" },
  ];

  return (
    <Layout>
      <Header crumbs={breadcrumbs} />
      <div className="space-y-6">
        <ProjectHeader
          handleMenuItemChange={handleMenuItemChange}
          activeMenu={activeMenu}
          breadcrumbs={breadcrumbs}
        />
        <div className="bg-white shadow rounded-md">
          {activeMenu === MenuItems.Overview && <Overview project={project} />}
          {activeMenu === MenuItems.List && <p>List Content</p>}
          {activeMenu === MenuItems.Board && <p>Board Content</p>}
          {activeMenu === MenuItems.Timeline && <p>Timeline Content</p>}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
