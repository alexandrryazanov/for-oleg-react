import React from "react";
import { ButtonProps } from "./types";
import "./styles.css";
import useTheme from "../../hooks/useTheme";
import { getContrastColor } from "../../utils";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className="button-wrapper"
      style={{
        background: variant === "outlined" ? "none" : theme.colors[color],
        borderColor: theme.colors[color],
        color:
          variant === "outlined"
            ? theme.colors[color]
            : getContrastColor(theme.colors[color]),
        boxShadow:
          variant === "outlined" ? "none" : `0 0 3px ${theme.colors[color]}`,
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
