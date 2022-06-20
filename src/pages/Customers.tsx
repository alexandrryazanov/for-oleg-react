import React, { useEffect, useState } from "react";
import * as usersAPI from "../api/users";
import AuthLayout from "../layouts/AuthLayout";

const Customers = () => {
  const [err, setErr] = useState("");
  const [customers, setCustomers] = useState<{ id: number; name: string }[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const { data, error } = await usersAPI.getAll();
      if (!error) {
        setCustomers(data);
        if (err) setErr("");
      } else {
        setErr((error as { message: string }).message);
      }
    })();
  }, []);

  return (
    <AuthLayout>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </AuthLayout>
  );
};

export default Customers;
