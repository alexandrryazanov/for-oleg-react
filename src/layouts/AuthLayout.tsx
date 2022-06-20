import React from "react";

import useAuth from "../hooks/useAuth";

const AuthLayout: React.FC = ({ children }) => {
  const isAuth = useAuth();
  if (!isAuth) return <div>Нет доступа</div>;

  return <>{children}</>;
};

export default AuthLayout;
