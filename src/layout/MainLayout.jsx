import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main
        style={{
          marginLeft: "250px",
          padding: "20px",
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
