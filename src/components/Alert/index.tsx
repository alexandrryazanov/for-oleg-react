import React, { useEffect, useState } from "react";
import "./styles.css";
import { AlertProps, AlertSettings } from "./types";
import useTheme from "../../hooks/useTheme";
import { getAlertSettings } from "../../components/Alert/utils";
import { getContrastColor } from "../../utils";

const Alert: React.FC<AlertProps> = ({ title, isOpen, type = "info" }) => {
  const { theme } = useTheme();
  const [settings, setSettings] = useState<AlertSettings>({
    icon: "info",
    background: theme.colors.info,
  });

  useEffect(() => {
    setSettings(getAlertSettings(type, theme));
  }, [type, theme]);

  return (
    <div
      className={`alert-wrapper ${isOpen ? "alert-open" : ""}`}
      style={{
        background: settings.background,
        color: getContrastColor(settings.background),
      }}
    >
      <i>{settings.icon}</i>
      {title}
    </div>
  );
};

export default Alert;
