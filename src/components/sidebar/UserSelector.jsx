"use client";

import { useContext, useState } from "react";
import Avatar from "../avatar/Avatar";
import { UserContext, usersData } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const UserSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [users, setUsers] = useState(usersData);
  const userLoggedIN = useContext(UserContext);
  const router = useRouter();

  const handleUserSelect = (e) => {
    const selectedUser = e.currentTarget.id;
    setUsers(
      users.map((user) => ({
        ...user,
        selected: user.user === selectedUser,
      })),
    );
    userLoggedIN.setUserLoggedIn({ ...userLoggedIN, user: selectedUser });
    router.replace("/");
    router.refresh();
  };

  return (
    <div
      className="-m-2 flex cursor-pointer justify-between rounded-lg bg-gray-200 p-2 2xl:rounded-xl"
      onClick={() => setShowOptions((prevState) => !prevState)}
    >
      <div className="flex w-full flex-col gap-2">
        {users.map((user, index) => (
          <div
            className={`flex w-full shrink-0 grow-0 items-center rounded-lg sm:h-16 sm:justify-center xl:h-12 xl:justify-between 2xl:h-16 ${
              !showOptions && !user.selected && "hidden"
            } ${
              showOptions &&
              "transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white"
            }`}
            key={index}
            id={user.user}
            onClick={(e) => showOptions && handleUserSelect(e)}
          >
            <div className="flex items-center">
              <Avatar page="sidebar" user={user.user} />
              <div className="hidden px-2 xl:block">
                <p className="2xl:text-lg">@{user.username}</p>
                <p className="text-xs uppercase text-gray-400 2xl:text-sm">
                  {user.fullname}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showOptions && (
        <div className="hidden shrink-0 grow-0 content-center text-base text-blue-500 xl:block 2xl:text-xl">
          Switch
        </div>
      )}
    </div>
  );
};

export default UserSelector;
