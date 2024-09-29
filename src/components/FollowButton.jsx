"use client";

import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const FollowButton = ({ page }) => {
  const [followState, setFollowState] = useState(false);

  return (
    <div
      className={`shrink-0 grow-0 cursor-pointer ${
        page === "profile"
          ? "bg-gray-200 px-3 sm:px-4 xl:px-3 2xl:px-4 [&>*]:mx-auto"
          : "font-semibold text-blue-500 transition-all duration-200 hover:-translate-x-1 hover:scale-110 sm:text-xl xl:text-sm 2xl:text-xl 2xl:font-bold"
      } `}
      onClick={() => {
        setFollowState((prevState) => !prevState);
      }}
    >
      {page === "profile" && (
        <PiPlusBold className="-mt-[2px] inline-block size-5 sm:mt-0 sm:size-7 xl:size-6 2xl:size-7" />
      )}
      <span className={page === "profile" && "pl-2 sm:pl-1"}>
        {followState
          ? page === "profile"
            ? "Following"
            : "Followed"
          : "Follow"}
      </span>
    </div>
  );
};

export default FollowButton;
