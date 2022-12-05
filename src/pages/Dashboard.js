import React from "react";
import Layout from "../components/layout/Layout";
import TransForm from "../form/TransForm.js";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="form">
        <TransForm />
      </div>
      <div className="table"></div>
    </Layout>
  );
};

export default Dashboard;
