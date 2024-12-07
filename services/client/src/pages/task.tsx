import React from "react";
import Layout from "../components/navigation/layout";
import { Header } from "../components/header/Header";

const Task = () => {
  return (
    <Layout>
      <Header crumbs={[{ label: "Tasks", to: "/tasks" }]} />
    </Layout>
  );
};

export default Task;
