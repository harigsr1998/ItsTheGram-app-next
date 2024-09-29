"use client";

import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import { useContext } from "react";

const AvatarImage = ({ user }) => {
  const userLoggedIN = useContext(UserContext);

  return (
    <Image
      src={`/avatar/${user ? user : userLoggedIN.user}.jpg`}
      height={96}
      width={96}
      className="w-full h-full object-cover rounded-full"
    />
  );
};

export default AvatarImage;
