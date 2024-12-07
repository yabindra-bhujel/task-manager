import React from "react";
import Layout from "../components/navigation/layout";
import { Header } from "../components/header/Header";

const Home = () => {
    return (
      <Layout>
        <Header crumbs={[{ label: "Home", to: "/" }]} />
      </Layout>
    );
}

export default Home;