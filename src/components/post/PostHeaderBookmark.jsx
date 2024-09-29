"use client";

import { useState } from "react";
import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";

const PostHeaderBookmark = ({ user_has_bookmarked }) => {
  const [userHasBookmarked, setUserHasBookmarked] =
    useState(user_has_bookmarked);

  return (
    <div className="self-center transition-all duration-200 hover:scale-110">
      {userHasBookmarked ? (
        <HiBookmark
          className="size-6 cursor-pointer sm:size-8 xl:size-6 2xl:size-7"
          onClick={() => setUserHasBookmarked((prevState) => !prevState)}
        />
      ) : (
        <HiOutlineBookmark
          strokeWidth={2}
          className="size-6 cursor-pointer sm:size-8 xl:size-6 2xl:size-7"
          onClick={() => setUserHasBookmarked((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default PostHeaderBookmark;
