import React from "react";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>{children}</div>;
    </div>
  );
};

export default MainLayout;
