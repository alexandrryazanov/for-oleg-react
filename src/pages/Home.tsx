import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <NavLink to={"/michael"}>Михан</NavLink>
      </div>
      <div>
        <NavLink to={"oleg"}>Олег</NavLink>
      </div>
      <div>
        <NavLink to={"Alex"}>Санёк</NavLink>
      </div>
    </>
  );
};

export default Home;
