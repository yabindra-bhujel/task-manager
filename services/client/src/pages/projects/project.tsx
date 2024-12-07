import React from "react";
import Layout from "../../components/navigation/layout";
import { Header } from "../../components/header/Header";

const Project = () => {

    const breadcrumbs = [
      { label: "Projects", to: "/projects" },
    ];
  return (
    <Layout>
      <Header crumbs={breadcrumbs} />
    </Layout>
  );
};

export default Project;
