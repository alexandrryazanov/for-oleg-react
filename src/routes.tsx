import React from "react";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test2 from "./pages/Test2";
import NotFound from "./pages/NotFound";
import Test3 from "./pages/Test3";
import Chart from "./pages/Chart";

const adminRoutes = [<Route path="admin/test" element={<Test />} key={1} />];
const userRoutes = [
  <Route path="chart" element={<Chart />} key={0} />,
  <Route path="/" element={<Test />} key={1} />,
  <Route path="test2" element={<Test2 />} key={2} />,
  <Route path="test3" element={<NotFound />} key={3} />,
  <Route path={`test3/:id`} element={<Test3 />} key={4} />,
  <Route path="*" element={<NotFound />} key={5} />,
];

const MainRoutes = () => {
  const isAdmin = true;
  return (
    <BrowserRouter>
      <Routes>
        {isAdmin && adminRoutes}
        {userRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
