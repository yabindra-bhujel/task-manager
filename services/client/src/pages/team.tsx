import React from "react";
import Layout from "../components/navigation/layout";
import { Header } from "../components/header/Header";

const Team = () => {
  return (
    <Layout>
      <Header crumbs={[{ label: "Team", to: "/teams" }]} />
    </Layout>
  );
};

export default Team;
