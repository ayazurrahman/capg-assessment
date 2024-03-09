import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
