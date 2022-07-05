import React, { useEffect } from "react";
import Bank from "./Bank";
import Client from "./User/Client";

const BankComponent = () => {
  useEffect(() => {
    const bank = new Bank();

    const admin = bank.createUser({
      name: "Alex",
      isAdmin: true,
    });

    const user1 = bank.createUser({
      name: "Oleg",
    }) as Client;

    const user2 = bank.createUser({
      name: "Mike",
      isAdmin: false,
    }) as Client;

    user1.addCard("Моя карта");

    user1.increaseBalance(1000);

    user1.transfer({
      client: user2,
      value: 500,
    });

    // admin.blockCard(cardOfUser1);
    // user2.closeAccount();

    console.dir(bank.getAllUsers());
  }, []);

  return <div>{/*<button onClick={() => null}>test</button>*/}</div>;
};

export default BankComponent;
