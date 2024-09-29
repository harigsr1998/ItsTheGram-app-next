"use client";

import { createContext, useState } from "react";

export const UserContext = createContext({
  user: "",
  setUserLoggedIn: () => {},
});

export const UserProvider = ({ children }) => {
  const [userLoggedIN, setUserLoggedIn] = useState({ user: "HG" });

  return (
    <UserContext.Provider value={{ ...userLoggedIN, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const usersData = [
  {
    user: "HG",
    username: "harigsr",
    fullname: "Harigovind",
    selected: true,
  },
  {
    user: "John",
    username: "johndoe",
    fullname: "John Doe",
    selected: false,
  },
  {
    user: "Jane",
    username: "janedoe",
    fullname: "Jane Doe",
    selected: false,
  },
];
