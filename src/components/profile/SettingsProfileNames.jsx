"use client";

import { useContext } from "react";
import { UserContext, usersData } from "@/context/UserContext";

const SettingsProfileNames = () => {
  const userLoggedIN = useContext(UserContext);
  const loggedInUser = usersData.find(
    (user) => user.user === userLoggedIN.user,
  );

  return (
    <>
      <p className="shrink-0 grow-0 text-base font-semibold sm:text-xl xl:text-base 2xl:text-xl">
        {loggedInUser.fullname}
      </p>
      <p className="shrink-0 grow-0 font-semibold text-gray-400">
        @{loggedInUser.username}
      </p>
    </>
  );
};

export default SettingsProfileNames;
