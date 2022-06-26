import React, { useState } from "react";
import themeContext from ".";
import { themes, skyTheme } from "../../themes";
import { ITheme } from "../../themes/types";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(skyTheme);

  const changeTheme = (title: string) => {
    const foundTheme = themes.find((theme) => theme.title === title);
    if (!foundTheme) return;

    setTheme(foundTheme);
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
