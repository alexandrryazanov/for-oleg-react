import { AlertSettings, AlertType } from "./types";
import { ITheme } from "../../themes/types";

export const getAlertSettings = (
  type: AlertType,
  theme: ITheme
): AlertSettings => {
  switch (type) {
    case "error":
      return { icon: "error", background: theme.colors.error };
    case "warning":
      return { icon: "warning", background: theme.colors.warning };
    case "success":
      return { icon: "success", background: theme.colors.success };
  }

  return { icon: "info", background: theme.colors.info };
};
