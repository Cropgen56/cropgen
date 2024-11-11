import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <div style={{ width: "20%" }}>
        {" "}
        <Sidebar />
      </div>
      {/* Main Content Area */}
      <main
        style={{
          // marginLeft: "10px",
          // padding: "20px",
          width: "100%",
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
