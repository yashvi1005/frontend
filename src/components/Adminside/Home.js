import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <span>
        <Sidebar />
      </span>
      <span>
        <Dashboard />
      </span>
    </>
  );
};

export default Home;
