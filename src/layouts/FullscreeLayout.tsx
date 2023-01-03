import React from "react";

const FullscreenLayout: React.FC = ({ children }) => {
  return <div style={{ maxWidth: "100%" }}>{children}</div>;
};

export default FullscreenLayout;
