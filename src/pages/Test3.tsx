import React from "react";
import { useParams } from "react-router-dom";

const Test3 = () => {
  let { id } = useParams();
  return <h1>Страничка 3, id = {id}</h1>;
};

export default Test3;
