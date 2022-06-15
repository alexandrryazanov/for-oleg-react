import React from "react";
import Test from "./pages/Alex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Test3 from "./pages/Test3";
import Michael from "./Michael/Michael";
import Oleg from "./Oleg/Oleg";

const adminRoutes = [<Route path="admin/test" element={<Test />} key={1} />];
const userRoutes = [
  <Route path="/" element={<Home />} key={0} />,
  <Route path="michael" element={<Michael />} key={1} />,
  <Route path="oleg" element={<Oleg />} key={2} />,
  <Route path="alex" element={<Test />} key={3} />,
  <Route path="test3" element={<NotFound />} key={4} />,
  <Route path={`test3/:id`} element={<Test3 />} key={5} />,
  <Route path="*" element={<NotFound />} key={6} />,
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
