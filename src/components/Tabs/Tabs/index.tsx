import React, { useState } from "react";
import "./styles.css";
import useTheme from "../../../hooks/useTheme";

const Tabs = ({ children }: { children: JSX.Element[] }) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-labels">
        {children.map((child, i) => (
          <div
            key={i}
            className="tab-label"
            style={{
              borderBottom:
                selectedTab === i
                  ? `3px solid ${theme.colors.primary}`
                  : "none",
            }}
            onClick={() => setSelectedTab(i)}
          >
            {child.props.title}
          </div>
        ))}
      </div>

      {children
        .filter((_, i) => i === selectedTab)
        .map((child, i) => (
          <React.Fragment key={i}>{child}</React.Fragment>
        ))}
    </div>
  );
};

export default Tabs;
