import React, { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);
  const [offset, setOffset] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const delay = new Promise((resolve) => setTimeout(resolve, 3000));

  const loadUsers = new Promise((resolve) => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=2&_start=${offset}`
    )
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      });
  });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await delay;
      const newUsers = (await loadUsers) as any;
      setIsLoading(false);
      if (newUsers.length) {
        setUsers([...users, ...newUsers] as any);
      }
    })();
  }, [offset]);

  return (
    <div>
      {users.map((el: any) => {
        return (
          <div
            style={{ border: "1px solid gray", padding: "15px" }}
            key={el.id}
          >
            Его зовут {el.name} и его ник {el.username}
          </div>
        );
      })}
      <button onClick={() => setOffset(offset + 2)}>Загрузить еще</button>

      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Card;
