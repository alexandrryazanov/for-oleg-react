import React, { useState } from "react";
import "./styles.css";
import Button from "components/Button";
import useTheme from "hooks/useTheme";

const Step = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className={"step-title"}>
        <div
          className={"step-icon"}
          style={{ backgroundColor: theme.colors.primary }}
        >
          1
        </div>
        <span>Title</span>
      </div>
      <div className={"step-content step-path"}>
        <p>
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.
        </p>
        <div className={"step-actions"}>
          <Button onClick={() => null}>CONTINUE</Button>
          <Button onClick={() => null} variant="outlined">
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step;
