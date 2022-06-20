import React, { useEffect, useState } from "react";
import * as productsAPI from "../api/products";

const Products = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await productsAPI.getAll();
      if (!error) {
        setProducts(data);
        setError("");
      } else {
        setError((error as { message: string }).message);
      }
    })();
  }, []);
  return (
    <>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
